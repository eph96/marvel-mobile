import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, FONT,SIZES } from "../../constants";
import { FlatGrid } from "react-native-super-grid";
import axios from "axios";
const Comics = () => {
  const { param } = useSearchParams();
  const [comics, setComics] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${param}/comics?&ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
      )
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, [param]);
  if (comics.length != 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lighblue },
            headerShadowVisible: false,
            headerTitle: "COMICS",
          }}
        />
         <Text style={styles.title}>COMICS</Text>
        <FlatGrid
          itemDimension={130}
          data={comics}
          style={styles.gridView}
          // staticDimension={300}
          //fixed
           spacing={20}
          renderItem={({ item}) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: COLORS.darkblue },
              ]}
            >
              <Image
                style={styles.image}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              /> 
              <Text numberOfLines={2} style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>price: $ {item.prices[0].price}</Text>
              
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
};
export default Comics;
const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: 40,
    color: COLORS.red,
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: "flex-start",
    borderRadius: 5,
    padding: 10,
    height: 210,
  },
  itemName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 10,
    color: COLORS.lightWhite,
    fontWeight: "500",
  },
  itemPrice: {
    margin: 15,
    textAlign: "center",
    fontSize: 12,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  image:{
    width: '100%',
    height: 90,
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "red",
  },
});
