import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./DetailsStyle";
import { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IonIcons from "react-native-vector-icons/Ionicons"
import { food } from "../FoodListComponent/FoodsMockApi";
const DetailsScreen = ({ route, navigation }) => {
  const [filled, setFilled] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerBtn}>
          <FontAwesome5 name="angle-left" size={20} />
        </Pressable>
        <Pressable style={styles.headerBtn}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>&#8942;</Text>
        </Pressable>
      </View>
      <View style={styles.productImgParent}>
        <Image
          source={require(`../../assets/FoodsImgs/${food[0].img}.jpg`)}
          style={styles.foodImg}
        />
      </View>
      <View style={styles.foodDetailsBody}>
        <View style={styles.detailsBodyHeaader}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 70,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 13,
              padding: 5,
              shadowOffset: 3,
              shadowColor: "rgba(99, 96, 96, 0.747)",
              shadowOpacity: 0.5,
              borderRadius: 30,
            }}
            onPress={() => setFilled(true)}
          >
            {filled ? (
              <Text style={{ fontSize: 17, fontWeight: 600 }}>&#9733;</Text>
            ) : (
              <Text style={{ fontSize: 17, fontWeight: 600 }}>&#9734;</Text>
            )}
            3.0
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 70,
              paddingHorizontal: 7,
              padding: 5,
              shadowOffset: 2,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowOpacity: 0.5,
              borderRadius: 30,
              backgroundColor: "orange",
            }}
          >
            <Pressable
              style={{
                fontWeight: 600
              }}
            >
              +
            </Pressable>
            <Text style={{
                fontWeight: 600,
                fontSize: 17,
              }}>
            02
            </Text>
            
            <Pressable style={{ fontWeight: 600 }}>-</Pressable>
          </View>
        </View>
        <View style={{ marginTop: -10 }}>
          <View style={{ width: "100%", paddingLeft: 10 }}>
            <Text style={{ fontSize: 20 }}> Food Name</Text>
          </View>
          <View>
            <Text style={{ marginTop: 10, marginHorizontal: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, deleniti blanditiis asperiores
            </Text>
            {/* wishlists briefs */}
            <View style={styles.wishLists}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Pressable style={styles.wishListsl}>
                  <Image
                    style={styles.wishListsImgs}
                    source={require(`../../assets/FoodsImgs/${food[0].img}.jpg`)}
                  />
                </Pressable>
                <Pressable style={styles.wishListsl}>
                  <Image
                    style={styles.wishListsImgs}
                    source={require(`../../assets/FoodsImgs/${food[0].img}.jpg`)}
                  />
                </Pressable>
                <Pressable style={styles.wishListsl}>
                  <Image
                    style={styles.wishListsImgs}
                    source={require(`../../assets/FoodsImgs/${food[0].img}.jpg`)}
                  />
                </Pressable>
              </ScrollView>
            </View>
            <View style={styles.footer}>
                
              <View>
              <Text style={{ marginTop: "5", fontSize: 10, fontWeight: "500", color: "#353535", fontWeight: 600 }}>
                 Total Price
                </Text>
                <Text
                  style={{ marginTop: "5", fontSize: 17, fontWeight: "600" }}
                >
                 N600.00
                </Text>
              </View>
              <View style={styles.addToCartBtnParent}>
                <Pressable
                  style={styles.addToCartBtn}
                  onPress={() => {
                    navigation.navigate("Cart");
                  }}
                >
                    <IonIcons name="cart-outline" color="white" size={20}/>
                  Add to cart
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
