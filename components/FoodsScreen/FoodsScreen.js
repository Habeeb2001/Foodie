import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./FoodsScreenStyle";
import Food_List_Component from "../FoodListComponent/FoodListComponent";
import { NavigationContainer } from "@react-navigation/native";
import SearchComponent from "../SearchComponent/SearchComponent";
import FoodClassComponent from "../FoodClassesComponents/FoodClassComponent";
import IonIcons from "react-native-vector-icons/Ionicons"
const FoodsScreen = ({navigation}) => {
  return (
    <View style={styles.FoodScreen}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Image
            style={{ tintColor: "black", width: 20, height: 20 }}
            source={require("../../assets/Icons-Svg/category.svg")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#000", paddingHorizontal: 7,paddingVertical: 5, borderRadius: 5, shadowColor: "rgba(102, 100, 100, 0.356)", shadowOffset: {
          width: 1, height: 1
        }, shadowOpacity: 3}}>
          
          <IonIcons name="cart-outline" color="white" size={20}/>
           {/* <Text>&#128722;</Text> */}
        </TouchableOpacity>
      </View>

      <View style={styles.intro}>
        <Text style={styles.intro1}>Craving?</Text>
        <Text style={styles.intro2}>Order now</Text>
      </View>
      {/* search component */}

      <SearchComponent />
      <FoodClassComponent />
      <View>
        {/* <Text style={{marginLeft: 15, fontWeight: 500}}>Recommended for you</Text> */}
      </View>
      <Food_List_Component navigation={navigation}/>
      <Food_List_Component/>

      
    </View>
  );
};

export default FoodsScreen;
