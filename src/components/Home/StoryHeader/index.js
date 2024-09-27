import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PlusOutline } from "../../../data/icons";
import styles from "./styles";

import * as NavigationService from "../../../NavigationService";

const user = {
  name: "Muhammed Fatih BAĞCIVAN",
  avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
  hasStory: false,
};

export default class StoryHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={user.hasStory ? ["#D6307E", "#F37A41", "#F06E48"] : ["#fff", "#fff"]}
          style={styles.gradient_area}
        >
          <Image style={styles.image_area} source={{ uri: user.avatar }} />
        </LinearGradient>
        {!user.hasStory && <TouchableOpacity onPress={() => NavigationService.navigate("NewStory")}
                                             style={styles.new_story_button}><PlusOutline size={20} fill="#0095F6" /></TouchableOpacity>}
        <Text style={styles.text_area} numberOfLines={1}>Hikayen</Text>
      </View>
    );
  }
}
