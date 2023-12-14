/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { React, useState } from 'react';
import { Image } from 'react-native';
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
import TripInfo from './src/screens/app/TripInfo';
import NewSighting from './src/screens/app/NewSighting';
import SightInfo from './src/screens/app/SightInfo';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TripStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let icon;
        let scale;

        if (route.name === 'Reisid') {
          icon = require('./src/assets/reisid.png')
          scale = {width: 56, height:70}
        } else if (route.name === 'Vaatamisväärsused') {
          icon = require('./src/assets/vaatamisv22rsused.png')
          scale = {width: 52, height: 68}
        } else if (route.name === 'Märkmed') {
          icon = require('./src/assets/m2rkmed.png')
          scale = {width: 56, height: 70}
        }

        return <Image style={scale} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { height: 120, backgroundColor: colors.background2 }
    })}
    >
      <Tab.Screen name="Reisid" component={TripStack} options={{ headerShown: false }} />
      <Tab.Screen name="Vaatamisväärsused" component={Sightings} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="Märkmed" component={Notes} options={{ headerShown: false }}></Tab.Screen>
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
                <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="NewTrip" component={NewTrip} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="TripInfo" component={TripInfo} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="NewSighting" component={NewSighting} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SightInfo" component={SightInfo} options={{ headerShown: false }}></Stack.Screen>
              </>
            )
            :
            (
              <>
                <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignUpScreen" component={SignUp} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="SignInScreen" component={SignIn} options={{ headerShown: false }}></Stack.Screen>
              </>
            )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
