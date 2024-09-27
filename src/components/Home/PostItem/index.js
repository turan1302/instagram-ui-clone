import React, { Component } from 'react'
import { Dimensions, Image, Text, View } from "react-native";
import posts from "../../../data/posts";
import { Bookmark, Comment, Heart, Message, More } from "../../../data/icons";
import SeeMore from "react-native-see-more-inline";
import styles from "./styles";
import { dayjs } from "../../../utils"


export default class PostItem extends Component {
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
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";
    const {item,index} = this.props;

    return (
      <View style={styles.container(index,posts)}>
        <View style={styles.post_header_area}>
          <View style={styles.post_header_left_area}>
            <Image style={styles.post_header_user_image}
                   source={{ uri: item.user.avatar }} />
            <Text style={styles.post_header_username_text}>{item.user.name}</Text>
          </View>
          <More fill="#262626" />
        </View>
        <Image style={styles.post_image(position,width,height)} source={{ uri: item.image }} />
        <View style={styles.post_detail_area}>
          <View style={styles.post_detail_left_area}>
            <View style={styles.post_detail_left_icons}>
              <Heart fill="#000" style={styles.icon_margin}/>
              <Comment fill="#000" size={22} style={styles.icon_margin}/>
              <Message fill="#000" size={22}/>
            </View>
            <Bookmark fill="#000"/>
          </View>
          <View style={styles.likes_area}>
            <Text style={styles.likes_text}>{item.likes} Beğeni</Text>
          </View>
          <SeeMore linkPressedColor={"blue"} linkStyle={styles.see_more_area} numberOfLines={2} seeMoreText={"Daha Fazla Göster"} seeLessText={"Daha Kısa Göster"}>
            <Text style={styles.post_detail_user_name}>{item.user.name}</Text>
            {'  '}
            <Text style={styles.post_detail_text}>{item.description}</Text>
          </SeeMore>
          <View style={styles.time_area}>
            <Text style={styles.time_text}>
              {dayjs(item.date).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
