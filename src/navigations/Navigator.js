import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { View, Text } from 'react-native'

const  Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
} 

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={screenOptionStyle}

    >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;


