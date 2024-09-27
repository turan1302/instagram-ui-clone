import { StyleSheet } from "react-native";
import posts from "../../../data/posts";

const styles = StyleSheet.create({
  container: (index, posts) => ({
    marginBottom: (index === posts.length - 1) ? 15 : null,
    marginTop : (index!== 0) ? 10 : null
  }),

  post_header_area : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  post_header_left_area : { flexDirection: "row", alignItems: "center"},
  post_header_user_image : { width: 30, height: 30, borderRadius: 30, marginRight: 10 },
  post_header_username_text : { fontSize: 14, fontWeight: "500", color: "black" },

  post_image : (position,width,height)=>({
    width: width,
    height: (position === "PORTRAIT") ? height * 0.35 : width * 0.35,
    objectFit: "fill",
  }),

  post_detail_area : {paddingHorizontal : 15},
  post_detail_left_area : {paddingVertical : 10,flexDirection : "row",justifyContent : "space-between",alignItems : "center"},
  post_detail_left_icons : {flexDirection : "row",alignItems : "center"},
  post_detail_user_name : {fontWeight : "600",fontSize : 14,color : "black"},
  post_detail_text : {color :"#000"},

  icon_margin : {marginRight : 15},

  likes_area : {marginBottom  :6},
  likes_text : {fontWeight : "600",fontSize : 14,color : "black"},

  see_more_area : {color : "blue"},

  time_area : {marginTop: 7, flexDirection: 'row'},
  time_text : { fontSize: 12, opacity: 0.8,color : "black"}
});

export default styles;
