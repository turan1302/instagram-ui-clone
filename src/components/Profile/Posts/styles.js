import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {flex : 1,backgroundColor : "#fff"},
  postImage: (width)=>({
    width: width/3,
    height: width/3,
    borderWidth : 0.5,
    borderColor : "black"
  })
});

export default styles;
