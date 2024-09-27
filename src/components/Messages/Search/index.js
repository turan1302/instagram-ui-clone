import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export default class Search extends Component {
  render() {
    const {changeSearchText} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.left_area}>
          <AntDesign name={"search1"} color={"#676767"} size={20} />
          <TextInput onChangeText={(e)=>changeSearchText(e)} placeholder={"Ara.."} placeholderTextColor={"#676767"}
                     style={styles.input_style} />
        </View>
        <TouchableOpacity>
          <Text style={styles.filter_button_area}>Filtrele</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
