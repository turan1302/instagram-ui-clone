import React, { Component } from 'react'

import Search from "../screens/Search";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class SearchNavigator extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
  }
}
