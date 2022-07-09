import { StyleSheet, Dimensions } from "react-native"
export const style = StyleSheet.create({
    FoodClassComponentBtns:{
        
        paddingHorizontal: 15,
        // marginVertical: 10,
        paddingVertical: 10,
        width: Dimensions.get("screen").width,
        
    },
    foodTypeBtn:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 30,
        backgroundColor: "rgb(179, 175, 175)",
        borderRadius: 50,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
    foodClassImg:{
        width: 22,
        height: 22,
        objectFit: "cover",
        borderRadius: "50%",
        },
    text:{
        color: "black",
        fontWeight: "600",
        fontSize: 13,
        marginLeft: 5,
        
    }
    
})
