import React, { Component } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Logo } from "../../data/icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

export default class Register extends Component {
  render() {
    return (

      <View style={styles.container}>
        <ScrollView bounces showsVerticalScrollIndicator={false} style={styles.scroll_area}>
          <View style={styles.form_area}>
            <Logo style={styles.form_logo} fill={"#000"} size={200} />
            <Text style={styles.form_title}>Arkadaşlarınızdan
              gelen fotoğraf ve videoları görmek için kaydolun</Text>
            <TouchableOpacity style={styles.facebook_login_button}>
              <AntDesign color={"#fff"} size={20} name={"facebook-square"} />
              <Text style={styles.facebook_login_button_text}>Facebook ile giriş
                yap</Text>
            </TouchableOpacity>
            <View style={styles.sepereator_area}>
              <View style={styles.seperator_left} />
              <Text style={styles.seperator_center}>VEYA</Text>
              <View style={styles.seperator_right} />
            </View>
            <View style={styles.form_email_area}>
              <TextInput style={styles.form_email_input} placeholder={"E-Mail veya Telefon Numarası"}
                         placeholderTextColor={"#919191"} />
            </View>
            <View
              style={styles.form_fullname_area}>
              <TextInput style={styles.form_fullname_input} placeholder={"Ad Soyad"}
                         placeholderTextColor={"#919191"} />
            </View>
            <View
              style={styles.form_nickname_area}>
              <TextInput style={styles.form_nickname_input} placeholder={"Kullanıcı Adı"}
                         placeholderTextColor={"#919191"} />
            </View>
            <View style={styles.form_password_area}>
              <TextInput style={styles.form_password_input} placeholder={"Şifre"} placeholderTextColor={"#919191"} />
              <TouchableOpacity>
                <Ionicons name={"eye-off"} color={"gray"} size={20} style={styles.form_password_secure_input} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signup_button}>
              <Text style={styles.signup_button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
            <Text style={styles.terms_cookies_policy_text}>By signing up, your agree to our <Text style={styles.terms_cookies_bold_text}>Terms Data Policy</Text> and <Text style={styles.terms_cookies_bold_text}>Cookies Policy</Text></Text>
          </View>
        </ScrollView>
        <View style={styles.sign_in_area}>
          <Text style={styles.sign_in_text}> Zaten Üye Misin ? </Text>
          <TouchableOpacity>
            <Text style={styles.sign_in_button_text}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
