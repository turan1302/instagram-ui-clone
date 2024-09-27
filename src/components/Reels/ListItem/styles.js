import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item_container: (height) => ({ flex: 1, justifyContent: "space-between", width: "100%", height: height }),
  item_description_area: { flex: 1, justifyContent: "flex-end", paddingHorizontal: 10, marginBottom: 40 },

  item_description_top_area: { flexDirection: "row", justifyContent: "flex-end" },

  item_button_first_area: { alignItems: "center" },
  item_button_second_area: { alignItems: "center", marginTop: 15 },
  item_button_third_area: { alignItems: "center", marginTop: 15 },
  item_button_text: { fontWeight: "bold", color: "white" },

  item_description_bottom_area: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
  },
  item_description_bottom_left_area: { flexDirection: "row", alignItems: "center" },

  item_profile_image: { width: 40, height: 40, borderRadius: 40 },
  item_profile_username: { marginLeft: 10, fontWeight: "bold", color: "#fff" },

  item_follow_button_area: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 12,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  item_follow_button_text : {fontWeight : "bold",color : "#fff"}
});

export default styles;
