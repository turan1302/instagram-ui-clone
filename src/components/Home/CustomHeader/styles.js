import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container_right_area: { flexDirection: "row", alignItems: "center" },

  plus_area: { marginRight: 20 },
  heart_area: { marginRight: 20 },
  heart_badge: {
    position: "absolute",
    backgroundColor: "#ff3450",
    width: 12,
    height: 12,
    right: -2,
    top: -2,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
  },

});

export default styles;
