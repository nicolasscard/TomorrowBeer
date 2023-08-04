import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Dimensions, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { usePunkApi } from '../../hooks/usePunkApi';
import { Beer } from '../../interfaces/punkApiResponse';
import { BeerCard } from '../../components/BeerCard';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { beerListStyles } from './styles';
import { ModalFilter } from '../../components/ModalFilter';
import { Filters } from '../../interfaces/Filters';

const windowWidth = Dimensions.get('window').width;

const BeerListScreen = () => {
  const { beers, isLoading, loadBeers } = usePunkApi();
  const { theme } = useContext( ThemeContext );
  const styles = beerListStyles(theme);
  const [isVisible, setIsVisible] = useState(false);
  const [values, setvalues] = useState<Filters>({ 
    beer_name: '',
    ibu_gt: 0,
   })

  useEffect(() => {
    loadBeers();
  }, []);

  const onPressItem = (id: number) => {
  };

  const applyFilters = (form: any) => {
    loadBeers(form);
    setvalues(form);
    setIsVisible(false);
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

      {!isLoading && beers.length === 0 &&
        <View style={{ flex: 1, padding: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textButton}>{"We did not find beers... =( "}</Text>
        </View>
      }

      {!isLoading && 
        <TouchableOpacity
            onPress={() => setIsVisible(!isVisible)}
            style={styles.primaryButton}
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
      }

      {isVisible && 
        <ModalFilter 
          isVisible
          apply={applyFilters} 
          setIsVisible={(value: boolean) => setIsVisible(value)} 
          values={values}
        />
      }

    </SafeAreaView>
  );
}

export default BeerListScreen;
