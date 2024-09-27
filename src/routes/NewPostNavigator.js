import React, { Component } from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPost from "../screens/NewPost";
const Stack = createNativeStackNavigator();

export default class NewPostNavigator extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
    )
  }
}
