import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

export default class SearchInput extends Component {
  render() {
    const { changeSearchText, value } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <AntDesign name={"search1"} color={"#676767"} size={20} />
          <TextInput value={value} onChangeText={(val) => changeSearchText(val)} placeholder={"Ara.."}
                     placeholderTextColor={"#676767"} style={styles.input} />
        </View>
        <TouchableOpacity>
          <Entypo name={"dots-three-horizontal"} size={20} color={"black"} />
        </TouchableOpacity>
      </View>
    );
  }
}
