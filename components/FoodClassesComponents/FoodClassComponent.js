import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { foodClases } from "./foodClassescontents";
import { style } from "./FoodClassesStyle";
// food class btn
const FoodClassComponent = () => {
  return (
    <View style={{ flex: 1 }}>

    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={style.FoodClassComponentBtns}
      contentContainerStyle={{flex: 1}}
    >
      {foodClases.map((food, idx) => (
        <TouchableOpacity style={style.foodTypeBtn} key={idx}>
          <Image
            source={require(`../../assets/FoodsImgs/${food.imgSrc}.jpg`)}
            style={style.foodClassImg}
          />
          <Text style={style.text}>{food.Class}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

export default FoodClassComponent;
