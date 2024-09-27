import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeNavigator from "./HomeNavigator";
import NewStory from "../screens/NewStory";
import * as NavigationService from "../NavigationService";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import MessageNavigator from "./MessageNavigator";
const Tab = createMaterialTopTabNavigator();

const CustomHeaderTitle = ({ title }) => {
  const maxLength = 15;
  const displayTitle = title.length > maxLength ? title.substring(0, maxLength) + '...' : title;

  return (
    <Text style={{ fontSize: 18, fontWeight: 'bold',color :"black" }}>{displayTitle}</Text>
  );
};

export default class SwipeNavigator extends Component {
  render() {
    return (
    <Tab.Navigator screenOptions={{
      tabBarStyle : {
        display : "none"
      }
    }} initialRouteName={"HomeNavigator"}>
      <Tab.Screen name={"NewStory"} component={NewStory}/>
      <Tab.Screen name={"HomeNavigator"} component={HomeNavigator}/>
      <Tab.Screen options={{
        headerShown  :true,
        headerShadowVisible : false,
        headerTitle : ()=><CustomHeaderTitle title={"mfsoftware.net.tr"}/>,
        headerBackVisible : false,
        headerLeft : ()=>(
          <TouchableOpacity onPress={()=>NavigationService.back()}>
            <FontAwesome6 name={"arrow-left-long"} color={"black"} size={20} style={{marginRight  :30}}/>
          </TouchableOpacity>
        ),
        headerRight : ()=>(
          <View style={{flexDirection : "row",justifyContent : "space-between",alignItems : "center"}}>
            <FontAwesome6 name={"list-ul"} color={"black"} size={25} style={{marginRight : 20}}/>
            <MaterialIcons name={"show-chart"} color={"black"} size={25} style={{marginRight : 20}}/>
            <Feather name={"edit"} color={"black"} size={25}/>
          </View>
        )
      }} name={"Messages"} component={MessageNavigator}/>
    </Tab.Navigator>
    )
  }
}
