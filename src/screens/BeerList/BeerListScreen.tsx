import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePunkApi } from '../../hooks/usePunkApi';
import { FlatList } from 'react-native-gesture-handler';
import { Beer } from '../../interfaces/punkApiResponse';

const BeerListScreen = () => {
  const { beers, isLoading, loadBeers } = usePunkApi();

  useEffect(() => {
    loadBeers();
  }, []);

  const renderItem = (item: Beer) => {
    return (
      <View>
        <Text>{ item.name }</Text>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontWeight: 'bold', paddingBottom: 20 }}>BeerListScreen</Text>
      {beers.length > 0 &&
        <FlatList
            data={beers}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
        />
      }
    </SafeAreaView>
  );
}

export default BeerListScreen;
