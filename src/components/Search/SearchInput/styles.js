import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { padding: 10, flexDirection: "row", alignItems: "center" },
  input_container : {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    justifyContent: "center",
    paddingLeft: 10,
    marginRight: 10,
    flex: 1,
    borderRadius : 10
  },
  input : { flex: 1, height: 38, paddingLeft: 15, alignSelf: "center" }
});

export default styles;
