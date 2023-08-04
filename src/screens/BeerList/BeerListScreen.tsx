import React, { useEffect } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePunkApi } from '../../hooks/usePunkApi';
import { FlatList } from 'react-native-gesture-handler';
import { Beer } from '../../interfaces/punkApiResponse';
import { BeerCard } from '../../components/BeerCard';

const windowWidth = Dimensions.get('window').width;

const BeerListScreen = () => {
  const { beers, isLoading, loadBeers } = usePunkApi();

  useEffect(() => {
    loadBeers();
  }, []);

  const onPressItem = (id: number) => {
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
    </SafeAreaView>
  );
}

export default BeerListScreen;
