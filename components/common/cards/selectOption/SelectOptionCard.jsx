import { View, Text, TouchableOpacity } from 'react-native'

import styles from './selectoptioncard.style';

const SelectOptionCard = () => {
  return (
    <TouchableOpacity 
    style = {styles.container()}
    onPress={() => handleCardPress()}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.option()} numberOfLines={1}> 
        Text
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default SelectOptionCard;