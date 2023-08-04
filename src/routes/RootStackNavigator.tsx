import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BeerListScreen, BeerDetailScreen } from '../screens';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export type StackParams = {
  BeerList: undefined,
  BeerDetail: {id: number},
}

const Stack = createStackNavigator<StackParams>();

export const RootStackNavigator = () => {
  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}> 
      <NavigationContainer theme={ theme }>
        <Stack.Navigator initialRouteName="BeerList">
          <Stack.Screen name="BeerList" options={{ headerShown: false }} component={ BeerListScreen } />
          <Stack.Screen name="BeerDetail" options={{ headerShown: false }} component={ BeerDetailScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
