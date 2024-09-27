import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from "../../src/NavigationService";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from "../screens/Login";
import WelcomeNavigator from "./WelcomeNavigator";
import Register from "../screens/Register";

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={"Welcome"} screenOptions={{headerShown : false}}>
          <Stack.Screen name="Welcome" component={WelcomeNavigator} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
