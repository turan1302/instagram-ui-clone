import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import styles from "./styles";
import profile_posts from "../../../data/profile_posts";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Reels extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  render() {
    const { width, height } = Dimensions.get("window");
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    return (
      <View>
        <FlatList numColumns={3}
                  showsVerticalScrollIndicator={false} scrollEnabled={true}
                  data={profile_posts}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity>
                      <ImageBackground imageStyle={styles.image_style} style={styles.postImage(width)} resizeMode={"stretch"}
                                       source={{ uri: item.image }}>
                        <View style={styles.views_area}>
                          <Ionicons name={"play-outline"} size={20} color={"black"} />
                          <Text style={styles.views_count}>{item.views}</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                  nestedScrollEnabled={true}
        />
      </View>

    );
  }
}
