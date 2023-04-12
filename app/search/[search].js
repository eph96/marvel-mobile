import React, { useState, useEffect } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, FONT, icons, images } from "../../constants";
import styles from "../../components/home/welcome/welcome.style";
import axios from "axios";
const Item = ({ item, onPress, style, busqueda }) => (
  <TouchableOpacity onPress={onPress} style={[stylesC.item, style]}>
    <View style={stylesC.containerFlatList}>
      <Image
        style={stylesC.image}
        source={{ uri: busqueda ==="characters"||busqueda ==="comics" ? `${item.thumbnail.path}.${item.thumbnail.extension}`: "https://images.thedirect.com/media/article_full/marvel-studios-avengers-television.jpg" }}
      />
      <View  style={stylesC.containerTitle} >
        <Text style={stylesC.title}>{busqueda == "characters"? item.name:busqueda == "creators"? item.fullName: item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
const search = () => {
  const router = useRouter();
  const { parametro, busqueda } = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(parametro);
  //API OBJECT
  const [consulta, setConsulta] = useState([]);
  //COLORS FLATLIST
  const [selectedItemId, setSelectedItemId] = useState(null);
  //Llamada al API
  useEffect(() => {
    axios
      .get(
        busqueda === "comics" ?
        `https://gateway.marvel.com:443/v1/public/${busqueda}?ts=1&titleStartsWith=${searchTerm}&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`:
        `https://gateway.marvel.com:443/v1/public/${busqueda}?ts=1&nameStartsWith=${searchTerm}&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
      )
      .then((res) => {
        setConsulta(res.data.data.results);
        // personajes.map(personaje=>console.log(personaje.name))
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedItemId ? COLORS.red : "#fff";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedItemId(item.id);
          busqueda === 'characters'?
          router.push({
            pathname: "/Character/_layout",
            params: { param: item.id }
          })
          : router.push({
            pathname: "/Comics/_layout",
            params: { param: item.id }
          })
          
        }}
        style={{ backgroundColor }}
        busqueda = {busqueda}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.darkblue },
          headerShadowVisible: false,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.marvel} />,
          headerTitle: `${busqueda}`,
          headerTintColor: COLORS.lightWhite,
        }}
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder={searchTerm}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            //console.log(searchTerm);
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesC.container}>
        <FlatList style={{margin:10}}
          data={consulta}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default search;
const stylesC = StyleSheet.create({
  containerFlatList:{
    flexDirection: "row", padding: 10,
  },
  containerTitle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
     maxWidth: '80%',
  },
  image:{
    width: 50,
     height: 50,
      marginRight: 20,
       borderRadius: 50 / 2 ,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 7,
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: FONT.bold,
  },
});
