import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, backgroundColor: "#fff" },
  post_image : { justifyContent: "space-between", width: "100%", height: 300 },

  resize_button_area : {
    position: "absolute",
    bottom: 1,
    padding: 5,
    margin: 20,
    backgroundColor: "#000000",
  },

  check_image_button_area : {
    backgroundColor: "#4f7bff",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius : 10
  },
  check_image_text : { color: "white", fontWeight: "bold" }
});

export default styles;
