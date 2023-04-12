import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import axios from "axios";
const Character = ({ id }) => {
  const [busqueda, setbusqueda] = useState(id);
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
      <View>
        <Text>Characters</Text>
      </View>
    );
  }
};
export default Character;
