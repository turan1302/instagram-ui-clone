import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import profile_posts from "../../../data/profile_posts";

export default class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions : Dimensions.get("window")
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.container}>
        <FlatList numColumns={3}
          showsVerticalScrollIndicator={false} scrollEnabled={true}
          data={profile_posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <TouchableOpacity>
            <Image style={styles.postImage(width)} source={{uri : item.image}}/>
          </TouchableOpacity>
          )}
          nestedScrollEnabled={true}
        />
      </View>

    );
  }
}
