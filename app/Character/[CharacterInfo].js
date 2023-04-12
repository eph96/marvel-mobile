import React, { useState, useEffect } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { COLORS, FONT, SIZES, images } from "../../constants";
import axios from "axios";
import Comics from "./Comics";

const CharacterInfo = () => {
  const {param} = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState(param);
  const [personaje, setPersonaje] = useState([]);
  const [path, setPath] = useState("");
  const [extension, setExtension] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${searchTerm}?&ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
      )
      .then((res) => {
        setPersonaje(res.data.data.results[0]);
        setPath(res.data.data.results[0].thumbnail.path);
        setExtension(res.data.data.results[0].thumbnail.extension)
        // personajes.map(personaje=>console.log(personaje.name))
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);
  if(personaje.length != 0){
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
            }}
          />
          <View>
          <Image
            style={styles.image}
            source={{ uri: path+'.'+extension}}
          />
          </View>
          <View style={{ margin: 10}}>
            <Text style={styles.title}>{personaje.name}</Text>
          </View>
          <View>
            <Text style={{textAlign:'center'}}>{personaje.description}</Text>
            <Text style={styles.subtitle}>Contenido</Text>
            <Text style={styles.text}>{"COMICS: "+personaje.comics.available}</Text>
            <Text style={styles.text}>{"SERIES: "+personaje.series.available}</Text>
            <Text style={styles.text}>{"STORIES: "+personaje.stories.available}</Text>
        
          </View>
        </SafeAreaView>
      );
    
  } 
  
};

export default CharacterInfo;
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.red,
    marginTop: 2,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.blue,
    marginTop: 10,
  },
  image:{
    width: '100%',
    height: 300,
  },
  text:{
    textAlign: 'center',
    fontFamily: FONT.bold,


  }
});
