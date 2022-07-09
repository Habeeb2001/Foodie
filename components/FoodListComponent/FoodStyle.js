import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Food_List_ComponentParent: {
    marginTop: 10,
    display: "flex",
    backgroundColor: "none",
    flexDirection: "row",
    alignItems: "center",
    // height: 250,
  },
  food: {
    display: "flex",
    flexDirection: "col",
    minWidth: 130,
    height: 220,
    borderRadius: 10,
    marginHorizontal: 15,
    shadowOffset: 3,
    shadowRadius: 10,
    shadowColor: "rgba(90, 88, 88, 0.747)",
    marginVertical: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  foodImgParent: {
    width: "100%",
    height: "55%",
    borderTopEndRadius: 15,
  },
  foodImg: {
    width: "100%",
    height: "100%",
  },
  foodBody:{
      width:"100%",
      height: "100%",
    // padding: 10,
  },
  foodName:{
    marginTop: 10,
    marginLeft: 10,
  },
  foodDesc:{
    // marginTop: 5,
    marginLeft: 10,
  },
  foodFooter:{
      width: "100%",
      marginLeft: 0,
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: 10,
      marginTop:7,
      justifyContent: "space-between",
      alignItems: "center",
  },
  wishList:{
    width: 20,
  }

});
