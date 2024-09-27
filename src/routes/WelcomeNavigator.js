import React, { Component } from "react";

import Login from "../screens/Login";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

import { Chat, Home, Heart, Logo, Plus, HomeFilled, SearchFilled, Search, ReelFilled, Reel } from "../data/icons";
import ProfileNavigator from "./ProfileNavigator";
import { Image, Text, TouchableOpacity } from "react-native";
import SwipeNavigator from "./SwipeNavigator";
import SearchNavigator from "./SearchNavigator";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ReelsNavigator from "./ReelsNavigator";
import Feather from "react-native-vector-icons/Feather";
import NewPostNavigator from "./NewPostNavigator";


const user = {
  name: "Muhammed Fatih BAĞCIVAN",
  avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
  hasStory: false,
};

export default class WelcomeNavigator extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: ((route) => {
            const tabBarHidden = ["NewStory"];

            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (tabBarHidden.includes(routeName)) {
              return {
                display: "none",
                borderTopWidth: 0.2,
                shadowColor: "transparent",
              };
            } else {
              return {
                borderTopWidth: 0.2,
                shadowColor: "transparent",
              };
            }
          })(route),

        };
      }}>

        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            focused ? (<HomeFilled fill={"#000"} size={24} />) : (
              <Home fill={"#000"} size={24} />
            )
          ),
        }} name="SwipeNavigator" component={SwipeNavigator} />

        <Tab.Screen options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            focused ? (<SearchFilled fill={"#000"} size={24} />) : (
              <Search fill={"#000"} size={24} />
            )
          ),
        }} name="SearchNavigator" component={SearchNavigator} />

        <Tab.Screen options={{
          headerShown: true,
          title: "Yeni Gönderi",
          headerTintColor: "#000",
          headerTransparent: false,
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: () => (
            <Plus size={25} fill={"#000"} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ fontWeight: "bold", color: "#5ea1ff", fontSize: 15 }}>İleri</Text>
            </TouchableOpacity>
          ),
        }} name="NewPostNavigator" component={NewPostNavigator} />

        <Tab.Screen options={{
          headerShown: true,
          title: "Reels",
          headerTintColor: "#fff",
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            focused ? (<ReelFilled fill={"#000"} size={24} />) : (
              <Reel fill={"#fff"} size={24} />
            )
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Feather name={"camera"} size={30} color={"#fff"} style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
        }} name="ReelsNavigator" component={ReelsNavigator} />

        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: 32, height: 32, borderRadius: 16, borderWidth: (focused) ? 1 : 0, borderColor: "black" }}
              source={{ uri: user.avatar }} />
          ),
        }} name="ProfileNavigator" component={ProfileNavigator} />
      </Tab.Navigator>
    );
  }
}
