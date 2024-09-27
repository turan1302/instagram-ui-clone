import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, backgroundColor: "white", justifyContent: "space-between" },
  scroll_area : { marginBottom: 10 },

  form_area : { alignItems: "center", paddingHorizontal: 30 },
  form_logo : { marginTop: 80 },
  form_title : { marginVertical: 10, fontWeight: "bold", fontSize: 15, textAlign: "center" },

  facebook_login_button : {
    borderRadius: 5,
    backgroundColor: "#4297fc",
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  facebook_login_button_text : { marginLeft: 10, color: "#fff", fontWeight: "600", fontSize: 15 },

  sepereator_area : { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 20 },
  seperator_left : { height: 1, flex: 1, backgroundColor: "gray" },
  seperator_center : { marginHorizontal: 10 },
  seperator_right : { height: 1, flex: 1, backgroundColor: "gray" },

  form_email_area : { backgroundColor: "#f1f1f1", flexDirection: "row", height: 40, borderWidth: 0.5 },
  form_email_input : { flex: 1, paddingLeft: 10 },

  form_fullname_area : { backgroundColor: "#f1f1f1", flexDirection: "row", height: 40, borderWidth: 0.5, marginTop: 10 },
  form_fullname_input : { flex: 1, paddingLeft: 10 },

  form_nickname_area : { backgroundColor: "#f1f1f1", flexDirection: "row", height: 40, borderWidth: 0.5, marginTop: 10 },
  form_nickname_input : { flex: 1, paddingLeft: 10 },

  form_password_area : {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    borderWidth: 0.5,
  },
  form_password_input : { flex: 1, paddingLeft: 10 },
  form_password_secure_input : { marginRight: 10 },

  signup_button : {
    borderRadius: 5,
    backgroundColor: "#4297fc",
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  signup_button_text : { color: "white" },

  terms_cookies_policy_text : { marginVertical: 15, fontSize: 15, textAlign: "center" },
  terms_cookies_bold_text : {fontWeight : "bold"},

  sign_in_area : { alignItems: "center", paddingVertical: 20, flexDirection: "row", justifyContent: "center" },
  sign_in_text : { color: "black" },
  sign_in_button_text : { color: "#4297fc", fontWeight: "bold" },
});

export default styles;
