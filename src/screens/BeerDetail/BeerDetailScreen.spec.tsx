import 'react-native-vector-icons/mock';
import React from 'react';
import renderer from 'react-test-renderer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { StackParams } from '../../routes/RootStackNavigator';
import { lightTheme } from '../../theme/theme';
import BeerDetailScreen from './BeerDetailScreen';

type NavigationProps = StackNavigationProp<StackParams, 'BeerDetail', undefined>;
type PartialNavigationProps = Partial<NavigationProps>;

const mockThemeContextValue = { 
  theme: lightTheme,
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
};

jest.mock('react', () => {
  const React = jest.requireActual('react');
  return {
    ...React,
    useContext: jest.spyOn(React, 'useContext'),
  }
});

jest.mock('../../context/themeContext/ThemeContext', () => ({
  ThemeContext: {
    Consumer: ({ children }) => children(mockThemeContextValue),
  },
}));


describe('HomeScreen', () => {

    it('should render correctly', () => {
      jest.spyOn(React, 'useContext').mockReturnValue(mockThemeContextValue);

      const mockNavigate: PartialNavigationProps = {
        navigate: jest.fn(),
      };
  
      const mockRoute: RouteProp<StackParams, 'BeerDetail'> = {
        key: '123',
        name: 'BeerDetail',
        params: { id: 1 },
      };

      const component = renderer.create(
        <BeerDetailScreen navigation={mockNavigate as NavigationProps} route={mockRoute} /> 
      );
        
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  