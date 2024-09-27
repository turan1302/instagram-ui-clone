import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, backgroundColor: "#fff" },

  empty_content_area : {padding : 10,justifyContent : "center",alignItems : "center"},
  empty_content_text : {color : "black"},

  recent_item_area : { padding: 10, flexDirection: "row", alignItems: "center", flex: 1 },
  recent_item_image : { width: 50, height: 50, borderRadius: 50 },

  recent_item_detail_area : { marginLeft: 10, width: "80%" },
  recent_item_username : { color: "black", fontWeight: "bold" },
  recent_item_description : { color: "#777777" }
});

export default styles;
