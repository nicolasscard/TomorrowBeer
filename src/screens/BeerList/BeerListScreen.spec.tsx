import React from 'react';
import renderer from 'react-test-renderer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { StackParams } from '../../routes/RootStackNavigator';
import { lightTheme } from '../../theme/theme';
import BeerListScreen from './BeerListScreen';

type NavigationProps = StackNavigationProp<StackParams, 'BeerList', undefined>;
type PartialNavigationProps = Partial<NavigationProps>;

const mockThemeContextValue = { 
  theme: lightTheme,
  setDarkTheme: jest.fn(),
  setLightTheme: jest.fn(),
};

const mockUsePunkApiData = { 
  beers: [], 
  isLoading: false, 
  loadBeers: jest.fn() 
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

jest.mock('../../hooks/usePunkApi', () => ({
  usePunkApi: jest.fn(() => mockUsePunkApiData),
}));

describe('BeerList',  () => {
    it('should render correctly', () => {
      jest.spyOn(React, 'useContext').mockReturnValue(mockThemeContextValue);

      const mockNavigate: PartialNavigationProps = {
        navigate: jest.fn(),
      };
  
      const mockRoute: RouteProp<StackParams, 'BeerList'> = {
        key: '123',
        name: 'BeerList',
        params: undefined,
      };

      const component = renderer.create(
        <BeerListScreen navigation={mockNavigate as NavigationProps} route={mockRoute} /> 
      );
        
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  