//web 362684109151-j5ait2s6tv4r6m9dke318v60s4km2c85.apps.googleusercontent.com

// ios 362684109151-qqu2ibinqva8k1h9c8g14cfjprsf99s0.apps.googleusercontent.com

//android 362684109151-ad7j4jn6i3t6cohke5kcq2mg92arr9oo.apps.googleusercontent.com


import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { images } from '../../constants';


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "709825852251-o587kq8mn1q5fv33pdt6kt1dindse29l.apps.googleusercontent.com",
    iosClientId: "709825852251-17br8gtu12kvq2l5h72iudin5umikpq2.apps.googleusercontent.com",
    androidClientId: "709825852251-pftj5i207ubb3o9kchh3rsk3sq7eh0os.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    if(response?.type === "success") {
      const{id_token}=response.params;
      setAccessToken(id_token);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }  

  return (
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
          
          <Image source={images.marvel} style={{width: 300, height: 40 } } resizeMode='contain' />
        </TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
