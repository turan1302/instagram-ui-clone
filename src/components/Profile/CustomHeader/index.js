import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Plus } from "../../../data/icons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";

const user = {
  name: "Muhammed Fatih BAĞCIVAN",
  username: "mfsoftware.net.tr",
  avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
  hasStory: false,
};

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.username_area}>
          <Text style={styles.username_text}>{user.username}</Text>
          <Entypo name={"chevron-small-down"} size={20} color={"black"} style={{marginLeft : 3}}/>
        </TouchableOpacity>
        <View style={styles.header_right_area}>
          <Plus fill={"#000"} size={25} style={styles.plus_style}/>
          <FontAwesome6 name={"bars"} size={25} color={"black"}/>
        </View>
      </View>
    );
  }
}
