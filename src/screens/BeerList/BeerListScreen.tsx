import React, { useContext, useEffect } from 'react';
import { FlatList, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { usePunkApi } from '../../hooks/usePunkApi';
import { Beer } from '../../interfaces/punkApiResponse';
import { BeerCard } from '../../components/BeerCard';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { beerListStyles } from './styles';

const windowWidth = Dimensions.get('window').width;

const BeerListScreen = () => {
  const { beers, isLoading, loadBeers } = usePunkApi();
  const { theme } = useContext( ThemeContext );
  const styles = beerListStyles(theme);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
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

export default BeerListScreen;
