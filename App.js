/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/app/Home';
import {
  useColorScheme,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sightings from './src/screens/app/Sightings';
import Notes from './src/screens/app/Notes';
import Splash from './src/screens/auth/Splash';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import NewTrip from './src/screens/app/NewTrip';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TripStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="NewTrip" component={NewTrip} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Reisid" component={TripStack}  options={{headerShown: false}}/>
      <Tab.Screen name="Vaatamisväärsused" component={Sightings} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name="Märkmed" component={Notes} options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  )
}

const App = () => {
  const [isSignedIn, setSignedIn] = useState(true);
  console.log(isSignedIn + " :current signed in status")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
      {
          isSignedIn
          ?
          (
            <>
              <Stack.Screen name="Tabs" component={MyTabs} options={{headerShown: false}} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}></Stack.Screen>
              <Stack.Screen name="SignUpScreen" component={SignUp} options={{headerShown: false}}></Stack.Screen>
              <Stack.Screen name="SignInScreen" component={SignIn} options={{headerShown: false}}></Stack.Screen>
            </>
          )
      }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
