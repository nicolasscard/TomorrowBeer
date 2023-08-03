import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { punkApiRequest } from '../../api/axios';

const BeerListScreen = () => {

  const getBeers = async () => {
    const resp = await punkApiRequest.get('beers');
    console.log('response: ', resp);
  };

  useEffect(() => {
    getBeers();
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>BeerListScreen</Text>
    </SafeAreaView>
  )
}

export default BeerListScreen;
