import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

import React from "react";
import { styles } from "./FoodStyle";
import { food } from "./FoodsMockApi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { NavigationsContainer } from "@react-navigation/native-stack";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const Foods = [
  food.filter((item) => item.type === "heavy")[0],
  food.filter((item) => item.type === "light")[0],
  food.filter((item) => item.type === "beverage")[0],
];

const Food_List_Component = ({ navigation }) => {
  const [Food, setFoods] = React.useState([]);
  const [filled, setFilled] = useState(false);

  React.useEffect(() => {
    setFoods(Foods);
    // console.log(Food);
    return () => {
      // effect
    };
  }, [Food]);
  return (
    <View style={styles.Food_List_ComponentParent}>
      <ScrollView
        horizontal={true}
        indicatorStyle={false}
        showsHorizontalScrollIndicator={false}
      >
        {Food.map((item, idx) => (
          <View style={styles.food} key={idx}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details")}
              style={styles.foodImgParent}
            >
              <Image
                source={require(`../../assets/FoodsImgs/${item.img}.jpg`)}
                style={styles.foodImg}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.foodBody}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDesc}>{item.desc}</Text>
              <View style={styles.foodFooter}>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  N{item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setFilled(true);
                  }}
                  style={styles.wishList}
                >
                  {filled ? (
                    <Text
                      style={{
                        paddingHorizontal: 0,
                        fontSize: 20,
                        color: "tomato",
                      }}
                    >
                      &#10084;
                    </Text>
                  ) : (
                    <Text
                      style={{
                        paddingHorizontal: 0,
                        fontSize: 20,
                        color: "tomato",
                      }}
                    >

                      &#9825;
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Food_List_Component;
