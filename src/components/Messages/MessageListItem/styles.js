import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : (index,messageData)=>({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: (index===messageData.length-1) ? 60 : 20,
    padding: 10,
  }),

  item_left_area : { flexDirection: "row", alignItems: "center", flex: 1 },
  item_profile_image : { width: 50, height: 50, borderRadius: 50 },
  message_user_area : { marginLeft: 10, flex: 1 },

  message_user_name : {color : "black",fontWeight : "bold"},
  message_detail : { marginRight: 20,color  :"black"},
});

export default styles;
