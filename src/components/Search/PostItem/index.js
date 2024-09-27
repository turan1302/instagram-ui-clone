import React, { Component } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowDimensions : Dimensions.get("window")
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';
    const {item,index} = this.props;

    return (
      <View style={styles.container(index)}>
        <View style={styles.left_item_area}>
          <View style={styles.left_item_first_area}>
            {item.fourPosts.slice(0, 2).map((post, index) => (
              <View key={index} style={styles.left_item_image_area}>
                <TouchableOpacity>
                  <Image
                    style={styles.left_item_image(width)}
                    source={{ uri: post.image }}
                  />
                </TouchableOpacity>

              </View>
            ))}
          </View>
          <View style={styles.left_item_second_area}>
            {item.fourPosts.slice(2, 4).map((post, index) => (
              <View key={index} style={styles.left_item_image_area}>
                <TouchableOpacity>
                  <Image
                    style={styles.left_item_image(width)}
                    source={{ uri: post.image }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {item.onePost && (
          <View style={styles.right_item_area(width,index)}>
            <TouchableOpacity>
              <Image
                style={styles.right_item_index}
                resizeMode={"stretch"}
                source={{ uri: item.onePost.image }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}
