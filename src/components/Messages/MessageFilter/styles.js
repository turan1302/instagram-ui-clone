import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  filter_button_area: (active,item) => ({
    flex: 1,
    backgroundColor: (active !== item.id) ? "#e7e7e7" : "#d7f1ff",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 8,
  }),
  filter_button_text : (active,item)=>({color : (active!==item.id) ? "#000" : "#4dbeff",fontWeight : "bold",padding : 6}),

  wishlist_button_area : {flex : 1,backgroundColor : "#e7e7e7",alignItems : "center",borderRadius : 8},
  wishlist_button_text : {color : "black",fontWeight : "bold",padding : 6}
});

export default styles;
