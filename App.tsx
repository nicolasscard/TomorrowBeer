import 'react-native-gesture-handler';
import React from 'react';
import { RootStackNavigator } from './src/routes/RootStackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <ThemeProvider> 
      <RootStackNavigator />
    </ThemeProvider> 
  );
};

export default App;
