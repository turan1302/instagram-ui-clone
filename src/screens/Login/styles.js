import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, backgroundColor: "white", justifyContent: "space-between" },
  scroll_area : {marginBottom  :10},

  form_area : { alignItems: "center", paddingHorizontal: 30 },
  form_logo_style : { marginTop: 200 },

  form_email_area : { backgroundColor: "#f1f1f1", flexDirection: "row", marginTop: 20, height: 40,borderWidth : 0.5 },
  form_email_input : { flex: 1, paddingLeft : 10},

  form_password_area : { backgroundColor: "#f1f1f1", flexDirection: "row",alignItems : "center", marginTop: 10, height: 40,borderWidth : 0.5 },
  form_password_input : { flex: 1, paddingLeft : 10},
  form_password_secure_icon : {marginRight : 10},

  forget_password_text : {marginTop : 10,alignSelf : "flex-end",color : "#4297fc",fontWeight : "bold"},
  login_button : {borderRadius : 5,backgroundColor : "#4297fc",width : "100%",marginTop : 20,justifyContent : "center", alignItems : "center",paddingVertical : 10},
  login_button_text : {color : "white"},

  facebook_login_area : {marginHorizontal : 30,marginTop : 20},
  facebook_login_seperator_area : {flexDirection : "row",alignItems : "center",justifyContent : "center"},

  left_seperator_area : {height : 1,flex:1,backgroundColor : "gray"},
  center_seperator : {marginHorizontal : 10},
  right_seperator : {height : 1,flex :1,backgroundColor : "gray"},

  facebook_button_area : {marginTop : 20,flexDirection : "row",justifyContent : "center",alignItems : "center"},
  facebook_button_text : {marginLeft : 10,color : "#4297fc",fontWeight : "600",fontSize : 15},

  signup_area : {alignItems : "center",paddingVertical : 20,flexDirection : "row",justifyContent : "center"},
  signup_text : {color  :"black"},
  signup_button_text : {color : "#4297fc",fontWeight : "bold"}
});

export default styles;
