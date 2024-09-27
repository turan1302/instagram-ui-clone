import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : (index)=>({ flexDirection: (index % 2 === 0) ? "row" : "row-reverse", marginBottom: 2 }),

  left_item_area : { flex: 2, flexDirection: "column" },
  left_item_first_area : { flexDirection: "row" },
  left_item_image_area : { margin: 1, flex: 1 },
  left_item_image : (width)=>({
    width: "100%",
    height: width / 3,
    borderWidth: 0.5,
    borderColor: "gray",
  }),

  left_item_second_area : { flexDirection: "row" },

  right_item_area : (width,index)=>({
    flex: 1,
    marginLeft: (index % 2 === 0) ? 2 : null,
    marginRight: (index % 2 !== 0) ? 2 : null,
    height: (width / 3) * 2.03,
  }),
  right_item_index : {
    width: "100%",
    height: "100%",
    borderWidth: 0.5,
    borderColor: "black",
  }

});

export default styles;
