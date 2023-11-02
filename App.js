/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/app/Home';
import {
  useColorScheme,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sightings from './src/screens/app/Sightings';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Reisid" component={Home}  options={{headerShown: false}}/>
      <Tab.Screen name="Vaatamisväärsused" component={Sightings} options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StackNav'>
        <Stack.Screen name="StackNav" component={MyTabs} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
