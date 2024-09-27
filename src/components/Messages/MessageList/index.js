import React, { Component } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Search from "../Search";
import Notes from "../Notes";
import MessageFilter from "../MessageFilter";
import MessageListItem from "../MessageListItem";
import * as NavigationService from "../../../NavigationService";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import * as PropTypes from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import messageData from "../../../data/messageData";

export default class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  changeSearchText = (value) => {
    this.setState({
      search: value,
    });
  };

  render() {


    return (
      <View>
        <Search changeSearchText={this.changeSearchText} />
        <FlatList ListHeaderComponent={() => (
          <>
            <Notes />
            <MessageFilter />
          </>
        )} showsVerticalScrollIndicator={false} data={messageData} keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <MessageListItem index={index} messageData={messageData} item={item}/>
                  )} />
      </View>
    );
  }
}
