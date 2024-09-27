import React, { Component } from "react";
import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import * as NavigationService from "../../NavigationService";
import CustomHeader from "../../components/NewStory/CustomHeader";
import styles from "./styles";

export default class NewStory extends Component {

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButton,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackButton = () => {
    NavigationService.back();
    return true;
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
        >
          <CustomHeader/>
          <View style={styles.capture_area}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} />
          </View>
        </RNCamera>
      </View>
    );
  }
}


