import React, { Component } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { launchImageLibrary } from "react-native-image-picker";
import styles from "./styles";

export default class NewPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCover: 1,
      imageUri: null,
    };
  }

  pickImage = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        alert("Kullanıcı resim seçimini iptal etti");
      } else if (response.error) {
        alert("ImagePicker Hatası: ", response.error);
      } else {
        const uri = response.assets[0].uri;
        this.setState({ imageUri: uri });
      }
    });
  };

  render() {
    const { isCover, imageUri } = this.state;

    return (
      <View style={styles.container}>
        {(imageUri) && <ImageBackground style={styles.post_image}
                                        resizeMode={(isCover) ? "cover" : "contain"} source={{ uri: imageUri }}>
          <TouchableOpacity onPress={() => this.setState({ isCover: !isCover })}
                            style={styles.resize_button_area}>
            <Entypo name={"resize-full-screen"} size={25} color={"#fff"} />
          </TouchableOpacity>
        </ImageBackground>
        }

        <TouchableOpacity onPress={this.pickImage} style={styles.check_image_button_area}>
          <Text style={styles.check_image_text}>Resim Seç</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
