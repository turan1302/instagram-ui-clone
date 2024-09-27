import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { padding: 10, flexDirection: "row", alignItems: "center" },
  left_area : {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    justifyContent: "center",
    paddingLeft: 10,
    marginRight: 10,
    flex: 1,
    borderRadius : 10
  },
  input_style  :{ flex: 1, height: 38, paddingLeft: 15, alignSelf: "center" },

  filter_button_area : { color: "#64a7ff", fontWeight: "bold", fontSize: 15 }
});

export default styles;
