import React, { useContext, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackScreenProps } from '@react-navigation/stack';

import { usePunkApi } from '../../hooks/usePunkApi';
import { Hop, Malt } from '../../interfaces/punkApiResponse';
import { ThemeContext } from '../../context/themeContext/ThemeContext';
import { StackParams } from '../../routes/RootStackNavigator';
import { beerDetailStyles } from './styles';
import { FadeInImage } from '../../components/FadeInImage';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
interface Props extends StackScreenProps<StackParams, 'BeerDetail'>{};

const DetailScreen = ({ route, navigation }: Props) => {
  const { beers, isLoading, loadBeers } = usePunkApi();
  const { theme } = useContext( ThemeContext );
  const styles = beerDetailStyles(theme);

  useEffect(() => {
    loadBeers({ids: route.params.id});
  }, []);

  if (beers.length === 1) {
    const { name, tagline, description } = beers[0];
    const { ingredients: { malt, hops, yeast}, food_pairing, first_brewed, image_url } = beers[0];
    const { brewers_tips, contributed_by} = beers[0];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, padding: 20 }}>
        <ScrollView style={{ flex: 1 }}>

            {/* back button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.primaryButton}
                activeOpacity={ 0.6 }
            >
              <View style={{  }}>
                <Icon
                    name="chevron-left"
                    color="white"
                    size={ windowWidth * 0.09 }
                />
              </View>
            </TouchableOpacity>

            {/* headers */}
            <View style={styles.header}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{tagline}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>

            {/* details */}
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
              <View style={styles.detailContent}>
                <Text style={styles.sectionTitle}>Ingredients:</Text>
                <Text>{`- Malts:`}</Text>
                <Text>{malt.map((value: Malt) => `   * ${value.name}\n`)}</Text>
                <Text>{`- Hops:`}</Text>
                <Text>{hops.map((value: Hop) => `   * ${value.name}\n`)}</Text>
                <Text>{`- Yeast:`}</Text>
                <Text>{yeast}</Text>
                <Text style={styles.sectionTitle}>First brewed</Text>
                <Text>{first_brewed}</Text>
                <Text style={styles.sectionTitle}>Is ideal to accompany with:</Text>
                <Text style={styles.descriptionText}>{food_pairing.map((value: string) => `* ${value}\n`)}</Text>
              </View>
              <View style={styles.image}>
                <FadeInImage
                  source={{ uri: image_url }}
                  style={ styles.beerImage }
                />
              </View>
            </View>

            {/* other information */}
            <View style={styles.bottomContent}>
              <Text style={styles.descriptionText}>{brewers_tips}</Text>
              <Text style={{ ...styles.descriptionText, textAlign: 'center'}}>{contributed_by}</Text>
            </View>

          </ScrollView>
      </SafeAreaView>
    );
  }
  else {
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, padding: 20 }}>
      <ActivityIndicator 
        style={{ flex: 1}} 
        color={ theme.colors.primary }
        size={ 30 }
      />
    </SafeAreaView>
  }

}

export default DetailScreen;
