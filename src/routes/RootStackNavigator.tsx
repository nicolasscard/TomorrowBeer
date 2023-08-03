import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BeerListScreen, BeerDetailScreen } from '../screens';

export type StackParams = {
  BeerList: undefined,
  BeerDetail: undefined,
}

const Stack = createStackNavigator<StackParams>();

export const RootStackNavigator = () => {
  return (
    <View style={{ flex: 1 }}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BeerList">
          <Stack.Screen name="BeerList" options={{ headerShown: false }} component={ BeerListScreen } />
          <Stack.Screen name="BeerDetail" options={{ headerShown: false }} component={ BeerDetailScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
