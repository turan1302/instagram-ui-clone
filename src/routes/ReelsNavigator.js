import React, { Component } from 'react'

import Reels from "../screens/Reels";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default class ReelsNavigator extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Reels" component={Reels} />
        </Stack.Navigator>
    )
  }
}
