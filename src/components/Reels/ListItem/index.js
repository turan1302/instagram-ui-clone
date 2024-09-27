import React, { Component } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

export default class ListItem extends Component {
  render() {
    const { height } = this.props;

    return (
      <ImageBackground style={styles.item_container(height)}
                       source={{ uri: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg" }}>
        <View style={styles.item_description_area}>
          <View style={styles.item_description_top_area}>
            <View>
              <View style={styles.item_button_first_area}>
                <AntDesign name={"hearto"} size={30} color={"#fff"} />
                <Text style={styles.item_button_text}>209</Text>
              </View>
              <View style={styles.item_button_second_area}>
                <FontAwesome name={"comment-o"} size={30} color={"#fff"} />
                <Text style={styles.item_button_text}>1</Text>
              </View>
              <View style={styles.item_button_third_area}>
                <Feather name={"send"} size={30} color={"#fff"} />
              </View>
            </View>
          </View>
          <View style={styles.item_description_bottom_area}>
            <View style={styles.item_description_bottom_left_area}>
              <Image style={styles.item_profile_image}
                     source={{ uri: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg" }} />
              <Text style={styles.item_profile_username}>mfsoftware.net.tr</Text>
              <TouchableOpacity style={styles.item_follow_button_area}>
                <Text style={styles.item_follow_button_text}>Takip Et</Text>
              </TouchableOpacity>
            </View>
            <Entypo name={"dots-three-vertical"} size={20} color={"#fff"} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
