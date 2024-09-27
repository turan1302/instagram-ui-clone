import React, { Component } from "react";
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ListItem from "../../components/Reels/ListItem";

export default class Reels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  render() {
    const { width, height } = this.state.windowDimensions;

    return (
      <FlatList bounces showsVerticalScrollIndicator={false} snapToInterval={height} decelerationRate={"fast"}
                snapToAlignment={"center"} data={[1, 2]} renderItem={() => (
        <ListItem height={height} />
      )} />
    );
  }
}
