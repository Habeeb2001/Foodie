import { View, Text, Pressable, Image, Button } from "react-native";
import { styles } from "./CartsStyle";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { food } from "../FoodListComponent/FoodsMockApi";
import { style } from "../FoodClassesComponents/FoodClassesStyle";
import CartItem from "./CartItem";
const CartsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn}>
          <FontAwesome5Icon name="angle-left" size={20} />
        </Pressable>
        <Pressable>
          <IonIcons name="trash-outline" size={20} />
        </Pressable>
      </View>
      <View style={styles.cartListHeader}>
        <Text style={{ fontSize: 27, fontWeight: "bold", letterSpacing: 1.5 }}>
          My
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 300,
            letterSpacing: 1.5,
            marginTop: -5,
          }}
        >
          CartList
        </Text>
      </View>
      {/* cart list */}
      <View style={styles.cartList}>
       <CartItem />
       <CartItem />
      </View>

      {/* checkout things */}
      <View style={styles.checkoutParent}>
        <View style={styles.checkoutTextParent}>
          <Text style={styles.checkoutDetailText}>Subtotal</Text>
          <Text style={styles.checkoutDetailText}>N300.00</Text>
        </View>
        <View style={styles.checkoutTextParent}>
          <Text style={styles.checkoutDetailText}>Delivery Fee</Text>
          <Text style={styles.checkoutDetailText}>N200.00</Text>
        </View>
        <View style={styles.checkoutTextParent}>
          <Text style={styles.checkoutDetailText}>Delivery Fee</Text>
          <Text style={styles.checkoutDetailText}>N300.00</Text>
        </View>
        <Pressable style={styles.checkoutBtn}>
          Checkout
          <FontAwesome5Icon name="arrow-right" style={{ marginLeft: 10 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartsScreen;
