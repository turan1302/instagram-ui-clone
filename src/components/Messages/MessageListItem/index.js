import React, { Component } from 'react'
import { Image, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

export default class MessageListItem extends Component {
  render() {
    const {item,index,messageData} = this.props;

    return (
      <View style={styles.container(index,messageData)}>
        <View style={styles.item_left_area}>
          <Image style={styles.item_profile_image} source={{ uri: item.avatar }} />
          <View style={styles.message_user_area}>
            <Text style={styles.message_user_name}>{item.name}</Text>
            {(item.senderMe !== true) ? (
                <Text numberOfLines={1} style={styles.message_detail}>{item.message}</Text>
              )
              :
              (
                <Text numberOfLines={1} style={styles.message_detail}>Sent {item.date} ago</Text>
              )
            }
          </View>
        </View>
        <Feather name={"camera"} size={30} color={"gray"} />
      </View>
    )
  }
}
