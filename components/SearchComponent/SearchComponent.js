import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
const SearchComponent = () => {
    return (
        <View style={style.searchBar}>
            <TextInput placeholder='search' placeholderTextColor={'black'} style={[style.child, style.searchBox]}/>
            
                <FontAwesome5.Button name="search" style={[style.child, style.searchBtn]} backgroundColor={"none"} color="black" size={20} />
            
        </View>)
    
}

const style = StyleSheet.create({
    searchBar:{
        display: "flex",
        alignItems: 'center',
        height: 35,
        flexDirection: "row",
        marginHorizontal: 12,
        marginVertical: 10,
        backgroundColor: "#fff",
        shadowOpacity: 2,
        shadowRadius: 10,
        shadowColor: "rgba(211, 207, 207, 0.521)",
        borderRadius: "50px"
    },
    child:{
        height: "100%"
    },
    searchBox:{
        width: "100%",
        paddingHorizontal: 10,
        fontSize: 15,
    }
,
searchBtn:{
    padding: "auto",
    tintColor: "#f3f3f3"
}

})
export default SearchComponent
