import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : (index,notes)=>({
    width: 90,
    paddingLeft: (index !== notes.length - 1) ? 10 : null,
    marginHorizontal: (index === notes.length - 1) ? null : null,
    marginRight: (index !== notes.length - 1) ? 10 : null,
  }),
  note_area : { position: "absolute", right: -0, alignItems: "center", width: "100%" },
  note_card : { backgroundColor: "white", zIndex: 1, padding: 5, borderRadius: 15, elevation: 5 },
  note_text : { color: "black", textAlign: "center" },

  note_user_image : { width: 75, height: 75, borderRadius: 50, marginTop: 21 },
  note_user_active_area : (index,notes)=>({
    padding: 7,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "green",
    position: "absolute",
    bottom: 23,
    right: 1,
    marginRight: (index === notes.length - 1) ? 10 : null,
  }),
  note_user_name : { textAlign: "center", color: "black" }
});

export default styles;
