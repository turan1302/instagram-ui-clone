import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {flex : 1,backgroundColor : "#fff"},
  postImage: (width)=>({
    width: width/3,
    height: width/2,
    borderWidth : 0.5,
    borderColor : "black",
  }),
  image_style : { flex: 1 },

  views_area : {
    position: "absolute",
    bottom: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  views_count : { marginLeft: 3, color: "black", fontSize: 14 }
});

export default styles;
