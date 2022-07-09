import {Dimensions, StyleSheet} from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        paddingTop: 0,
        backgroundColor: "#f1f1f1",
        fontFamily: "Arial",
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
    headerBtn:{

    },
    productImgParent:{
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 300,
        width: "100%",
        marginTop: 0,
        margin: 0,
        // top: 0

    },
    foodImg:{
        width: "inherit",
        height: "inherit",

    },
    foodDetailsBody:{
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        top: -30,
        width: Dimensions.get("screen").width,
        backgroundColor: "whitesmoke",
        
    },
    detailsBodyHeaader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginTop: -25,
    },

    wishLists:{
        width: "100%",
        marginVertical: 10
    },
    wishListsImgs:{
        width: 80,
        height: 80,
        marginHorizontal: 10,
        borderRadius: 10,

    },
    footer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    addToCartBtnParent:{
        width: "60%",
        
    },
    addToCartBtn: {
        color: "#fff",
        backgroundColor: "black",
        tintColor: "black",
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10,
        textAlign: "center",
        // textAlignVertical: "center",
        

    }

})