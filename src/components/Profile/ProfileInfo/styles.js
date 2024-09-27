import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { marginTop: 20, paddingHorizontal: 20 },
  top_detail_area : { flexDirection: "row", justifyContent: "space-between" },
  image_gradient_area : {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
  },
  image_area : { width: 90, height: 90, borderRadius: 90, borderWidth: 2, borderColor: "#fff" },

  new_story_button : {
    position: "absolute",
    bottom: -25,
    right: -20,
    padding: 3,
    borderRadius: 25,
    backgroundColor: "#fff",
  },

  counter_area : { flexDirection: "row", alignItems: "center" },

  post_counter_area : { alignItems: "center", marginRight: 30 },
  post_counter_number : { fontWeight: "bold", fontSize: 20, color: "black" },
  post_counter_text : { color: "black", fontWeight: "400" },

  followers_counter_area : { alignItems: "center", marginRight: 30 },
  followers_counter_number : { fontWeight: "bold", fontSize: 20, color: "black" },
  followers_counter_text : { color: "black", fontWeight: "400" },

  following_counter_area : { alignItems: "center", marginRight: 15 },
  following_counter_number : { fontWeight: "bold", fontSize: 20, color: "black" },
  following_counter_text : { color: "black", fontWeight: "400" },

  description_area : { marginTop: 30 },
  description_user_fullname : { fontWeight: "bold", color: "black" },
  profile_description : { color: "#000" },

  pano_area : { backgroundColor: "#eeeeee", marginTop: 20, borderRadius: 5, padding: 10 },
  pano_title : { color: "black", fontWeight: "500" },
  pano_text : { marginTop: 5, color: "gray" },

  profile_button_area : { flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginTop : 10},
  edit_profile_button : {backgroundColor : "#eee",padding : 8,flex : 1,marginRight : 10,borderRadius : 5,alignItems : "center"},
  edit_profile_button_text : {color : "black",fontWeight : "bold"},

  share_profile_button : {backgroundColor : "#eee",padding : 8,flex : 1,borderRadius : 5,alignItems : "center"},
  share_profile_button_text : {color : "black",fontWeight : "bold"}
});

export default styles;
