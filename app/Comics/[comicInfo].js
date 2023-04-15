import React, { useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import Character from "./ScreenFilter/Characters";
const comicInfo = () => {
  const router = useRouter();
  const { param } = useSearchParams();
  const [filter, setFilter] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
        }}
      />
      {/* <Text>{console.log(param)}</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Characters")}
          >
            <Text style={styles.text}>Characters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Stories")}
          >
            <Text style={styles.text}>Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFilter("Creators")}
          >
            <Text style={styles.text}>Creators</Text>
          </TouchableOpacity>
        </View>
        <View>
          {filter === "Characters" ? (
            <Character id={param} />
          ) : filter === "Stories" ? (
            console.log("")
          ) : (
            console.log("")
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default comicInfo;
const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    flexDirection: "row",
    padding: SIZES.small,
    justifyContent: "space-around",
  },
  text: {
    color: COLORS.lightWhite,
  },
  button: {
    backgroundColor: COLORS.darkblue,
    borderRadius: 25,
    padding: 10,
  },
});
