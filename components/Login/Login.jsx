import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { images } from '../../constants';



// web 985040084009-o5v5p3558didn0fs7iigt90q8eh3e6no.apps.googleusercontent.com
// iOS  985040084009-09davhgahflmktpmihnvhupac5gjvn9i.apps.googleusercontent.com
//android 985040084009-ji5s7gmbr171iqi7j08pm08hudoapduh.apps.googleusercontent.com
WebBrowser.maybeCompleteAuthSession();



export const Login = () => {
    const router = useRouter();
    const [accessToken, setAccessToken] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: "1069574156631-l29dud4ccd5t16r7bov05k8udd24bl5b.apps.googleusercontent.com",
        iosClientId: "1069574156631-nfv8ipjudkpf4i43grgmdje4bdjci8dp.apps.googleusercontent.com",
        androidClientId: "1069574156631-aopmnmpt3kqkev521vvo9vi9o8vgrv8r.apps.googleusercontent.com"
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            setAccessToken(id_token);
            accessToken && fetchUserInformation();
           
        }
    }, [response, accessToken]);

    // no es necesaria
    async function fetchUserInformation() {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userInfo = await response.json();
        setUser(userInfo);
    }

    return (
        <View style={styles.container}>
            
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
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
});