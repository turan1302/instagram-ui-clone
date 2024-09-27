import React, { Component } from 'react'
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default class NotesItem extends Component {
  render() {
    const {item,index,notes} = this.props;

    return (
      <View style={styles.container(index,notes)}>
        <View style={styles.note_area}>
          {(item.note !== null) &&
            <View
              style={styles.note_card}>
              <Text numberOfLines={2} style={styles.note_text}>{item.note}</Text>
            </View>
          }
        </View>
        <Image style={styles.note_user_image}
               source={{ uri: item.image }} />
        <View style={styles.note_user_active_area(index,notes)} />
        <Text style={styles.note_user_name} numberOfLines={1}>{item.name}</Text>
      </View>
    )
  }
}
