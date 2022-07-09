import { View, Text, Image, Pressable,  } from 'react-native'
import { useState } from 'react';
import { styles } from './CartsStyle';
import { food } from '../FoodListComponent/FoodsMockApi';
const CartItem = () => {
    const [amount, setAmount] = useState()
    return (
        <View style={styles.cartItem}>
        <Image
          style={styles.cartItemImg}
          source={require(`../../assets/FoodsImgs/${food[0].img}.jpg`)}
        />
        <View>
          <Text style={styles.cartItemName}>Rice & Chicken</Text>
          <Text style={styles.cartItemPrice}>N500.00 x2</Text>
        </View>
        <View style={styles.controlBtnsParent}>
          <Pressable style={styles.controlBtn}>+</Pressable>
          <Pressable style={styles.controlBtn0}>-</Pressable>
        </View>
      </View>
    )
}

export default CartItem
