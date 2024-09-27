import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {backgroundColor : "#fff",flex : 1,paddingHorizontal : 10},
  filter_container : {paddingVertical : 10},
  filter_text_container : {fontWeight : "bold",color : "black",fontSize : 17,marginBottom : 10},

  item_container : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  item_left_container : { flexDirection: "row", alignItems: "center", flex: 1, marginRight: 20 },
  item_image : { width: 50, height: 50, borderRadius: 25, objectFit: "cover" },
  item_detail_area : { marginLeft: 10, width: "88%" },

  item_username : { fontWeight: "600", fontSize: 14, color: "black" },
  item_detail_text : {color  :"#6b6b6b"},

  item_post_image : { width: 50, height: 50, objectFit: "cover", borderRadius: 10 },

  item_subscribe_button_area : (item)=>({
    backgroundColor: (item.subscribe === 1) ? "#d2d2d2" : "#405DE6",
    padding: 8,
    borderRadius: 10,
  }),
  item_subscribe_button_text : (item)=>({
    color: (item.subscribe === 1) ? "#000" : "#fff",
    fontWeight: "bold",
  })
});

export default styles;
