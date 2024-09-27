import React, { Component } from "react";
import {FlatList, View } from "react-native";
import CustomHeader from "../../components/Home/CustomHeader";
import Stories from "../../components/Home/Stories";
import posts from "../../data/posts";
import PostItem from "../../components/Home/PostItem";
import styles from "./styles";

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader />
        <FlatList ListHeaderComponent={<Stories />} showsVerticalScrollIndicator={false} bounces data={posts}
                  keyExtractor={(item, index) => index} renderItem={({ item, index }) => {
          return (
            <PostItem item={item} index={index}/>
          );
        }} />
      </View>
    );
  }
}
