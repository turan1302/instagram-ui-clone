import React, { Component } from 'react'
import { Platform, SafeAreaView, Text, View } from "react-native";
import Routes from "./src/routes";
import { checkMultiple, openSettings, PERMISSIONS, requestMultiple } from "react-native-permissions";

export default class App extends Component {

  constructor() {
    super();

    this.controlPermision();
  }

  controlPermision = ()=>{
    const camera = Platform.select({
      android : PERMISSIONS.ANDROID.CAMERA
    });

    const microphone = Platform.select({
      android : PERMISSIONS.ANDROID.RECORD_AUDIO
    });

    const read_external = Platform.select({
      android : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    });

    const write_external = Platform.select({
      android : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    });

    checkMultiple([camera,microphone,read_external,write_external]).then((check)=>{
      if (check[camera]==="denied" || check[microphone] === "denied" || check[read_external]==="denied" || check[write_external]==="denied"){
        requestMultiple([camera,microphone,read_external,write_external]).then((res)=>{
          if (
            (res[camera]==="denied" || res[camera]==="blocked") ||
            (res[microphone]==="denied" || res[microphone]==="blocked") ||
            (res[read_external]==="denied" || res[read_external]==="blocked") ||
            (res[write_external]==="denied" || res[write_external]==="blocked")
          ){
            openSettings().catch((err)=>console.log(err));
          }
        }).catch((err)=>{
          console.log(err);
        })
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {
    return (
     <SafeAreaView style={{flex : 1}}>
       <Routes/>
     </SafeAreaView>
    )
  }
}
