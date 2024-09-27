import React, { Component } from "react";


import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { Text, TouchableOpacity, View } from "react-native";

import * as NavigationService from "../NavigationService";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../screens/Messages";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

export default class HomeNavigator extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "Bildirimler",
          headerLeft: () => (
            <TouchableOpacity onPress={() => NavigationService.back()}>
              <FontAwesome6 name={"arrow-left-long"} color={"black"} size={20} style={{ marginRight: 30 }} />
            </TouchableOpacity>
          ),
        }} name="Notifications" component={Notifications} />
      </Stack.Navigator>

    );
  }
}
