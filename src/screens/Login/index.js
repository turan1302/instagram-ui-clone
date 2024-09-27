import React, { Component } from "react";
import {ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Logo } from "../../data/icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

export default class Login extends Component {
  render() {
    return (

        <View style={styles.container}>
          <ScrollView bounces showsVerticalScrollIndicator={false} style={styles.scroll_area}>
            <View style={styles.form_area}>
              <Logo style={styles.form_logo_style} fill={"#000"} size={200} />
              <View style={styles.form_email_area}>
                <TextInput style={styles.form_email_input} placeholder={"E-Mail or Username"} placeholderTextColor={"#919191"}/>
              </View>
              <View style={styles.form_password_area}>
                <TextInput style={styles.form_password_input} placeholder={"Password"} placeholderTextColor={"#919191"}/>
                <TouchableOpacity>
                  <Ionicons name={"eye-off"} color={"gray"} size={20} style={styles.form_password_secure_icon}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.forget_password_text}>Şifreni mi unuttun ?</Text>
                <TouchableOpacity style={styles.login_button}>
                  <Text style={styles.login_button_text}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.facebook_login_area}>
              <View style={styles.facebook_login_seperator_area}>
                <View style={styles.left_seperator_area}/>
                <Text style={styles.center_seperator}>VEYA</Text>
                <View style={styles.right_seperator}/>
              </View>
              <View style={styles.facebook_button_area}>
                <AntDesign color={"#4297fc"} size={20} name={"facebook-square"}/>
                <Text style={styles.facebook_button_text}>Facebook ile giriş yap</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.signup_area}>
            <Text style={styles.signup_text}> Henüz Hesabın Yok Mu ? </Text>
            <TouchableOpacity>
              <Text style={styles.signup_button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>

    );
  }
}
