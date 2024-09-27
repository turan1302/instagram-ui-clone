import React, { Component } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class Notifications extends Component {
  render() {

    const today = [
      {
        id: 1,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
      {
        id: 2,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
      {
        id: 3,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
    ];


    const last_week = [
      {
        id: 1,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
      {
        id: 2,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
      {
        id: 3,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        story: 'https://mfsoftware.net/storage/photos/1/25%20ARALIK%202021/PHP%20%C4%B0LE.png',
      },
    ];

    const last_month = [
      {
        id: 1,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        subscribe: 1,
      },
      {
        id: 2,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        subscribe: 0,
      },
      {
        id: 3,
        username: "mfsoftware.net.tr",
        avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
        subscribe: 1,
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces>
          {/* bugün */}
          <View style={styles.filter_container}>
            <Text style={styles.filter_text_container}>Bugün</Text>
            {today.map((item, index) => (
              <View key={index} style={styles.item_container}>
                <View style={styles.item_left_container}>
                  <Image style={styles.item_image}
                         source={{ uri: item.avatar }} />
                  <View style={styles.item_detail_area}>
                    <Text><Text style={styles.item_username}>{item.username}</Text>
                      <Text style={styles.item_detail_text}> senin paylaşmış olduğun hikayeyi beğendi</Text></Text>
                  </View>
                </View>
                <Image style={styles.item_post_image}
                       source={{ uri: item.story }} />
              </View>
            ))}
          </View>
          {/* son 7 gün */}
          <View style={styles.filter_container}>
            <Text style={styles.filter_text_container}>Son 7 gün</Text>
            {last_week.map((item, index) => (
              <View key={index} style={styles.item_container}>
                <View style={styles.item_left_container}>
                  <Image style={styles.item_image}
                         source={{ uri: item.avatar }} />
                  <View style={styles.item_detail_area}>
                    <Text><Text style={styles.item_username}>{item.username}</Text>
                      <Text style={styles.item_detail_text}> senin paylaşmış olduğun hikayeyi beğendi</Text></Text>
                  </View>
                </View>
                <Image style={styles.item_post_image}
                       source={{ uri: item.story }} />
              </View>
            ))}
          </View>
          {/* son 30 gün */}
          <View style={styles.filter_container}>
            <Text style={styles.filter_text_container}>Son 30 gün</Text>
            {last_month.map((item, index) => (
              <View key={index} style={styles.item_container}>
                <View style={styles.item_left_container}>
                  <Image style={styles.item_image}
                         source={{ uri: item.avatar }} />
                  <View style={styles.item_detail_area}>
                    <Text><Text style={styles.item_username}>{item.username}</Text>
                      <Text style={styles.item_detail_text}> senin paylaşmış olduğun hikayeyi beğendi</Text></Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.item_subscribe_button_area(item)}>
                  <Text
                    style={styles.item_subscribe_button_text(item)}>{(item.subscribe === 1) ? "Takip" : "Takip Et"}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
