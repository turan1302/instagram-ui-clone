import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {marginTop : 20},

  new_fetaured_area : {marginLeft : 20,marginRight : 30,justifyContent :"center",alignItems  :"center"},
  new_featured_circle_view : {width:68,height : 68,borderWidth : 1,borderRadius : 34,justifyContent : "center",alignItems : "center"},
  new_featured_text : {color : "#000",marginTop  :5},

  featured_item_area : (index,featured)=>(
    {marginRight : (index===featured.length-1) ? null : 20,width : 68,alignItems : "center"}
  ),

  featured_item_gradient : {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 3
  },
  featured_item_image : {width : 64,height : 64,borderRadius : 64,borderWidth  :3,borderColor : "#fff"},
  featured_item_text : {color : "black",marginTop : 5}
});

export default styles;
