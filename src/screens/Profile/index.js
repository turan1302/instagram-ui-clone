import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomHeader from "../../components/Profile/CustomHeader";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import Posts from "../../components/Profile/Posts";
import Featured from "../../components/Profile/Featured";
import Reels from "../../components/Profile/Reels";
import Tagged from "../../components/Profile/Tagged";
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";


const Tab = createMaterialTopTabNavigator();
const { height } = Dimensions.get("window");

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader />
          <ProfileInfo />
          <Featured />
          <TabNavigator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      style={{
        height: height * 0.7,
        elevation: 0,
        borderTopWidth: 0,
      }}
      initialRouteName={"Gönderiler"}
      tabBarOptions={{
        style: { backgroundColor: "#fff" },
        labelStyle: { fontWeight: "bold" },
      }}
      screenOptions={{
        lazy: true,
        tabBarIndicatorStyle: {
          backgroundColor: "#000",
          marginHorizontal: 25,
          width: "20%",
        },
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen name="Gönderiler" options={{
        tabBarIcon: ({ focused }) => (
          <Fontisto name={"nav-icon-grid"} size={20} color={(focused) ? "black" : "gray"} />
        ),
      }} component={Posts} />
      <Tab.Screen name="Reels" options={{
        tabBarIcon: ({ focused }) => (
          <Octicons name={"video"} size={20} color={(focused) ? "black" : "gray"} />
        ),
      }} component={Reels} />
      <Tab.Screen name="Etiketlemeler" options={{
        tabBarIcon: ({ focused }) => {
          return (focused) ? <AntDesign name={"tag"} size={20} color={"black"} /> :
            <AntDesign name={"tago"} size={20} color={"black"} />;
        },
      }} component={Tagged} />
    </Tab.Navigator>
  );
};

export default Profile;
