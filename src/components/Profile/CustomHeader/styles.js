import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {
    padding : 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username_area : {flexDirection : "row",justifyContent :"center",alignItems : "center"},
  username_text : { fontWeight: "bold", fontSize: 20, color: "black" },

  header_right_area : { flexDirection: "row", alignItems: "center" },
  plus_style : {marginRight : 30}
});

export default styles;
