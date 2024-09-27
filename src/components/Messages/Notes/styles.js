import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {paddingVertical : 10},

  list_header_area : {marginHorizontal : 10,marginRight : 10},
  list_header_notes_area : {position : "absolute",right  :-0,alignItems : "center",width  : "100%"},
  list_header_notes_card : {backgroundColor : "white",zIndex  :1,padding : 5,borderRadius : 15,elevation : 5},
  list_header_notes_text : {color : "black",textAlign : "center"},

  list_header_user_avatar : {width : 75,height : 75,borderRadius : 50,marginTop : 21},
  list_header_user_active : {
    padding: 7,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "green",
    position: "absolute",
    bottom: 23,
    right: 1,
  },
  list_header_user_text : { textAlign: "center", color: "black" }
});

export default styles;
