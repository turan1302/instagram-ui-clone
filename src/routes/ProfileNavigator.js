import React, { Component } from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();


export default class ProfileNavigator extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
  }
}
