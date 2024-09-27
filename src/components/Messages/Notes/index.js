import React, { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import NotesItem from "../NotesItem";
import notes from "../../../data/notes";

export default class Notes extends Component {
  render() {
    const user = {
      avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
    };



    return (
      <View style={styles.container}>
        <FlatList ListHeaderComponent={() => (
          <View style={styles.list_header_area}>
            <View style={styles.list_header_notes_area}>
              <View style={styles.list_header_notes_card}>
                <Text numberOfLines={2} style={styles.list_header_notes_text}>Not bırakmak için tıklayınız</Text>
              </View>
            </View>
            <Image style={styles.list_header_user_avatar} source={{ uri: user.avatar }} />
            <View style={styles.list_header_user_active} />
            <Text style={styles.list_header_user_text} numberOfLines={1}>Sen</Text>
          </View>
        )} horizontal showsHorizontalScrollIndicator={false} data={notes} keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <NotesItem notes={notes} item={item} index={index} />
                  )} />
      </View>
    );
  }
}
