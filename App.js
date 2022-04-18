import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigator';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
