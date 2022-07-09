import { StyleSheet, Dimensions } from "react-native";
const borderRadiusBottom ={
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
}
export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    backgroundColor: "#f1f1f1",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    backgroundColor: "none",
    top: 0,
    bottom: 0,
  },
  backBtn: {
    backgroundColor: "#fff",
    padding: 5,
    paddingHorizontal: 10,
    shadowColor: "#f3f3f3",
    shadowOffset: { width: 1, height: 1 },
  },
  cartListHeader: {
    paddingHorizontal: 15,

  },
  cartList:{
      marginTop: 50,
    marginHorizontal: 15
  },
cartItem:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    marginBottom: 20,
    paddingHorizontal: 10,
},
cartItemImg:{
    width: "30%",
    height: "70%",
    resizeMode: "cover",
},
cartItemName:{
    fontSize: 20,
},
cartItemPrice:{
    fontSize: 13,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.5)"
},
controlBtnsParent:{
    width: 25,
    backgroundColor:"black",
    height: "70%",
    borderRadius: 5,
    overflow: "hidden",
},
controlBtn:{
    backgroundColor: "rgba(200, 200, 200, 0.3) rgba(255, 255, 255, 0.3)",
    height: "50%",
    color: "white",
    fontWeight: "600",
    // borderRadiusBottom,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontSize: 15,


},
controlBtn0:{
    backgroundColor: "#000",
    height: "50%",
    color: "white",
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontSize: 15,
},
  checkoutParent:{
    width: "inherit",
    height: "100%",
    padding: 15,
    bottom: 0,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,

  },
  checkoutTextParent:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 17,

  },
  checkoutDetailText:{
    color: "rgba(0, 0, 0, 0.5)"
  },
  checkoutBtn:{
      padding: 10,
      backgroundColor: "#f7b63f",
      color: "black",
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      borderRadius: 10,
  },

});
