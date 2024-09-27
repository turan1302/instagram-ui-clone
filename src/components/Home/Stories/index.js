import React, { Component } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PlusOutline } from "../../../data/icons";
import styles from "./styles";
import StoryHeader from "../StoryHeader";
import stories from "../../../data/stories";


export default class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list_area} ListHeaderComponent={() => (
          <StoryHeader />
        )} horizontal bounces contentContainerStyle={{ alignItems: "center" }} showsHorizontalScrollIndicator={false}
                  data={stories} keyExtractor={(item, index) => index} renderItem={({ item, index }) => {
          return (
            <View style={styles.item_area}>
              <LinearGradient
                colors={["#D6307E", "#F37A41", "#F06E48"]}
                style={styles.image_container}
              >
                <Image style={styles.image} source={{ uri: item.avatar }} />
              </LinearGradient>
              <Text numberOfLines={1} style={styles.text}>{item.user}</Text>
            </View>
          );
        }} />
      </View>
    );
  }
}
