
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { FadeInImage } from './FadeInImage';
import { Beer } from '../interfaces/punkApiResponse';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    beer: Beer;
    onPress: (id: number) => void;
}

export const BeerCard = ({ beer, onPress }: Props ) => {

    const { id, name, ingredients: {malt, hops, yeast}, tagline} = beer;
    const ramdomPrice = Number(Math.random() * 90).toFixed(2);

    return (
        <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={() => onPress(id)}
        >
            <View style={styles.cardContainer}>

                {/* Beer information */}
                <View>
                    <Text style={ styles.description}> 
                        {`${tagline}`}
                    </Text>
                    <Text style={ styles.title }>
                        { name.toUpperCase() }
                    </Text>
                </View>

                <FadeInImage 
                    source={{ uri: beer.image_url }}
                    style={ styles.beerImage }
                />

                {/* price */}
                <View>
                    <Text style={ styles.price }>
                        { `${ramdomPrice}` }
                    </Text>
                    <Text style={ styles.currency }>
                        { 'USD' }
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        height: windowHeight * 0.4,
        width: windowWidth * 0.4,
        borderRadius: 3,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        justifyContent: 'space-between',
        padding: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    beerImage: {
        width: windowWidth * 0.1,
        height: windowHeight * 0.2,        
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },
    currency: {
        textAlign: 'center',
        color: 'pink',
        fontWeight: 'bold',
    },
    description: {
        textAlign: 'center',
        color: '#A5967D',
        fontWeight: 'bold',
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});