import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './welcome.style';
import { Stack, useRouter } from 'expo-router';
import { icons } from '../../../constants';
import { useState } from 'react';

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const [search, setSearch] = useState("/search/[search]");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage} >Welcome!</Text>
        <Text style={styles.about} >Find all about comics, characters, and creators</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{
          router.push({
            pathname: `${search}`,
            params: {parametro: searchTerm, busqueda: "characters"},
        })
        }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;