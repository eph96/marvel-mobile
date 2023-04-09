import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './welcome.style';
import { icons } from '../../../constants';

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {

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

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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