import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import axios from "axios";
import Carousel from "react-native-reanimated-carousel";
const Character = ({ id }) => {
  const [busqueda, setbusqueda] = useState(id);
  const width = Dimensions.get('window').width;
  const [consulta, setConsulta] = useState([]);
  useEffect(() => {
    if (busqueda) {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/${busqueda}/characters?ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
        )
        .then((res) => {
          setConsulta(res.data.data.results);
          // personajes.map(personaje=>console.log(personaje.name))
        })
        .catch((error) => console.log(error));
    }
  }, [busqueda]);
  if (consulta.length != 0) {
    return (
      <View style={{ flex:1}}>
        <Carousel
        loop
        width={width}
        height={width/2}
        >
          {consulta.map((item) => (
            
            <View key={item.id}>
              <Image
                source={`${item.thumbnail.path}.${item.thumbnail.extension}`}
               
              />
            </View>
          ))}
        </Carousel>
      </View>
    );
  }
};
export default Character;
