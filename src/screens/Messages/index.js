import React, { Component } from 'react'
import { BackHandler, Text, View } from "react-native";
import Search from "../../components/Messages/Search";
import Notes from "../../components/Messages/Notes";
import MessageFilter from "../../components/Messages/MessageFilter";
import MessageList from "../../components/Messages/MessageList";

import * as NavigationService from "../../NavigationService"

export default class Messages extends Component {

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackButton = () => {
    NavigationService.navigate("HomeNavigator");
    return true;
  };


  render() {
    return (
      <View style={{flex :1,backgroundColor : "#fff"}}>
        <MessageList/>
      </View>
    )
  }
}
