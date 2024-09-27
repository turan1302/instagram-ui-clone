import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {paddingLeft : 15,marginRight : 10},

  gradient_area : {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2
  },

  image_area : {width : 64,height : 64,borderRadius : 64,borderWidth  :2,borderColor : "#fff"},
  new_story_button : {
    position: 'absolute',
    bottom: 20,
    right: 0,
    padding: 3,
    borderRadius: 25,
    backgroundColor: '#fff'
  },
  text_area : {alignSelf : "center",color : "black"}
});

export default styles;
