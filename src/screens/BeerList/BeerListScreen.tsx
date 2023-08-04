import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePunkApi } from '../../hooks/usePunkApi';
import { FlatList } from 'react-native-gesture-handler';
import { Beer } from '../../interfaces/punkApiResponse';
import { BeerCard } from '../../components/BeerCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;

const BeerListScreen = () => {
  const { beers, isLoading, loadBeers } = usePunkApi();

  useEffect(() => {
    loadBeers();
  }, []);

  const onPressItem = (id: number) => {
  };

  const onPressFilter = () => {
  };

  const renderItem = (item: Beer) => {
    return (
      <BeerCard beer={item} onPress={onPressItem} />
    );
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {beers.length > 0 &&
        <FlatList
            data={beers}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
            numColumns={2}
            columnWrapperStyle={{ 
              justifyContent: 'space-between', 
              marginHorizontal: windowWidth * 0.065, 
              marginVertical: windowWidth * 0.0325
             }}
        />
      }

      <TouchableOpacity
          onPress={onPressFilter}
          style={styles.button}
          activeOpacity={ 0.6 }
      >
        <View style={{ position: 'absolute' }}>
          <Icon
              name="filter"
              color="white"
              size={ windowWidth * 0.08 }
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      backgroundColor: '#9F3A52',
      width: windowWidth * 0.15,
      height: windowWidth * 0.15,
      borderRadius: windowWidth * 0.075,
      right: windowWidth * 0.1,
      top: windowWidth * 0.15,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 20,
    },
});

export default BeerListScreen;
