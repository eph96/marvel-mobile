import React from 'react';
import { useState } from "react";

import { View, ScrollView, SafeAreaView,Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, images, SIZES } from "../constants";
import { SelectOption, ScreenHeaderBtn, Welcome } from "../components";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();
const Home = () => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1069574156631-l29dud4ccd5t16r7bov05k8udd24bl5b.apps.googleusercontent.com",
    iosClientId:
      "1069574156631-nfv8ipjudkpf4i43grgmdje4bdjci8dp.apps.googleusercontent.com",
    androidClientId:
      "1069574156631-aopmnmpt3kqkev521vvo9vi9o8vgrv8r.apps.googleusercontent.com",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      setAccessToken(id_token);
      accessToken && fetchUserInformation();
    }
  }, [response, accessToken]);
  async function fetchUserInformation() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userInfo = await response.json();
    setUser(userInfo);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.darkblue },
          headerShadowVisible: false,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.marvel} />,
          headerTitle: "Marvel app",
          headerTintColor: COLORS.lightWhite,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <View style={styles.container}>

            {user === null && (
              <>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>
                  Welcome
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginBottom: 20,
                    color: "gray",
                  }}
                >
                  Please login
                </Text>
                <TouchableOpacity
                  disabled={!request}
                  onPress={() => {
                    router.push({
                        pathname: "Principal/Principal",
                        params: { param: searchTerm }
                      })
                    promptAsync();
                    
                  }}
                  
                >
                  <Image
                    source={images.marvel}
                    style={{ width: 300, height: 40 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
