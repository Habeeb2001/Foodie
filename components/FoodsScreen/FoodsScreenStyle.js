import { Dimensions, StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    FoodScreen:{
        backgroundColor: '#f1f1f1',
        // height: "100%"
    },
    header:{
        width: Dimensions.get("screen").width,
        display: "flex",
        flexDirection: "row",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    headerIcons:{
        backgroundColor: "none",
        tintColor: "black"
    },
    intro:{
        paddingHorizontal: 20,
    },
    intro1:{
        fontSize: 30,
        fontWeight: 500
    },
    intro2:{
        fontSize: 20,
        fontWeight: 300,
    },
    discoverText:{
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: "600"
    }
})
