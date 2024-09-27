import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as NavigationService from "../../../NavigationService";

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={{backgroundColor : "transparent",padding : 20}}>
        <View style={{flexDirection : "row",justifyContent :"space-between"}}>
          <TouchableOpacity onPress={()=>NavigationService.navigate("HomeNavigator")}>
            <AntDesign name={"close"} size={30} color={"black"}/>
          </TouchableOpacity>
          <Ionicons name={"flash-off"} size={30} color={"black"}/>
          <MaterialIcons name={"settings"} size={30} color={"black"}/>
        </View>
      </View>
    )
  }
}
