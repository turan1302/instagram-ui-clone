import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PlusOutline } from "../../../data/icons";
import SeeMore from "react-native-see-more-inline";
import styles from "./styles";

const user = {
  name: "Muhammed Fatih BAĞCIVAN",
  avatar: "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg",
  profile: `Bilgisayar ve İnternet Sitesi
Founder at mfsoftware.net | seyyaryazilimci.com
Kendi halinde bir backend developer
Her pazar yeni makale

linktr.ee/mfsoftware`,
  hasStory: false,
};

export default class ProfileInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_detail_area}>
          <View>
            <LinearGradient style={styles.image_gradient_area} colors={user.hasStory ? ["#D6307E", "#F37A41", "#F06E48"] : ["#fff", "#fff"]}>
              <Image style={styles.image_area}
                     source={{ uri: user.avatar }} />
            </LinearGradient>
            {!user.hasStory && <TouchableOpacity style={styles.new_story_button}><PlusOutline size={20} fill="#0095F6" /></TouchableOpacity>}
          </View>
          <View style={styles.counter_area}>
            <View style={styles.post_counter_area}>
              <Text style={styles.post_counter_number}>54</Text>
              <Text style={styles.post_counter_text}>gönderi</Text>
            </View>
            <View style={styles.followers_counter_area}>
              <Text style={styles.followers_counter_number}>319</Text>
              <Text style={styles.followers_counter_text}>takipçi</Text>
            </View>
            <View style={styles.following_counter_area}>
              <Text style={styles.following_counter_number}>677</Text>
              <Text style={styles.following_counter_text}>takip</Text>
            </View>
          </View>
        </View>
        <View style={styles.description_area}>
          <Text style={styles.description_user_fullname}>{user.name}</Text>
          <SeeMore numberOfLines={2}>
            {""}
            <Text style={styles.profile_description}>{user.profile}</Text>
          </SeeMore>
        </View>
        <TouchableOpacity style={styles.pano_area}>
          <Text style={styles.pano_title}>Profesyonel Pano</Text>
          <Text style={styles.pano_text}>Son 30 günde 3 B görüntüleme</Text>
        </TouchableOpacity>
        <View style={styles.profile_button_area}>
          <TouchableOpacity style={styles.edit_profile_button}>
            <Text style={styles.edit_profile_button_text}>Profili Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.share_profile_button}>
            <Text style={styles.share_profile_button_text}>Profili Paylaş</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
