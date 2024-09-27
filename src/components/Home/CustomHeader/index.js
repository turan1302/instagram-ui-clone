import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chat, Heart, Logo, Plus } from "../../../data/icons";
import styles from "./styles";

import * as NavigationService from "../../../NavigationService";

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo size={120}/>
        <View style={styles.container_right_area}>
          <TouchableOpacity onPress={()=>NavigationService.navigate("NewPostNavigator")} style={styles.plus_area}>
            <Plus fill={"#000"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>NavigationService.navigate("Notifications")} style={styles.heart_area}>
            <Heart fill={"#000"}/>
            <View style={styles.heart_badge}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>NavigationService.navigate("Messages")}>
            <Chat fill={"#000"}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
