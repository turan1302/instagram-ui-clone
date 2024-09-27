import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class MessageFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active : 1,
      filters : [
        {
          id : 1,
          name : "Birincil"
        },
        {
          id  :2,
          name : "Genel"
        }
      ]
    }
  }

  changeActiveFilter = (id)=>{
    this.setState({
      active : id
    });
  }

  render() {
    const {active,filters} = this.state;

    return (
      <View style={styles.container}>
        {filters.map((item,index)=>(
          <TouchableOpacity onPress={()=>this.changeActiveFilter(item.id)} key={index} style={styles.filter_button_area(active,item)}>
            <Text style={styles.filter_button_text(active,item)}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.wishlist_button_area}>
          <Text style={styles.wishlist_button_text}>İstekler</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
