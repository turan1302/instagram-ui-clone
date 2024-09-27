import React, { Component } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import featured from "../../../data/featured";



export default class Featured extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList ListFooterComponent={()=>(
         <TouchableOpacity style={styles.new_fetaured_area}>
           <View style={styles.new_featured_circle_view}>
             <AntDesign name={"plus"} size={20} color={"#000"}/>
           </View>
           <Text style={styles.new_featured_text}>Yeni</Text>
         </TouchableOpacity>
        )} horizontal showsHorizontalScrollIndicator={false} bounces style={{paddingHorizontal : 20,borderBottomWidth : 1,paddingBottom : 15,borderBottomColor : "#e0e0e0",marginBottom : -5}} data={featured} keyExtractor={(item,index)=>index} renderItem={({item,index})=>(
          <View style={styles.featured_item_area(index,featured)}>
            <LinearGradient
              colors={['#ccc', '#ccc', '#ccc']}
              style={styles.featured_item_gradient}>
              <Image style={styles.featured_item_image} source={{uri : item.avatar}}/>
            </LinearGradient>
            <Text style={styles.featured_item_text} numberOfLines={1}>{item.title}</Text>
          </View>
        )}/>
      </View>
    )
  }
}
