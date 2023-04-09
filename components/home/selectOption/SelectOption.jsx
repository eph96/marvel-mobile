import { View, Text } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';//SE DEBE INSTALAR******
import styles from './selectoption.style'
import { SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/selectOption/SelectOptionCard';

const Selectoption = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select your searching option:</Text>
      </View>

      <View style={styles.cardsContainer} >
        <GridFlatList
          data={[1, 2, 3]}
          renderItem={() => (
            <PopularJobCard
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Selectoption;