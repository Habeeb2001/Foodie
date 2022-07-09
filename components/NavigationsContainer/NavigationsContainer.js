import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Pressable } from "react-native";
import CartsScreen from "../CartsScreen/CartsScreen";
import DetailsScreen from "../DetailsScreen/DetailsScreen";
import { styles } from "../DetailsScreen/DetailsStyle";
import FoodsScreen from "../FoodsScreen/FoodsScreen";

import RegisterScreen from "../RegisterScreen/RegisterScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RegHeader from "../RegisterScreen/RegHeader";
import LoginHeader from "../LoginScreen/LoginHeader";
import LoginScreen from "../LoginScreen/LoginScreen"
const Stack = createNativeStackNavigator();
const NavigationsContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name={"Foods" || "Home"}
          options={{
            headerShown: false,
          }}
          component={FoodsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={"Search"}
          component={SearchScreen}
        />
        <Stack.Screen
          initialParams={"name"}
          options={{
            headerShown: false,
          }}
          name={"Details"}
          component={DetailsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={"Cart"}
          component={CartsScreen}
        />
        <Stack.Screen
          name="Register"
          
          options={{
            header:()=> (<RegHeader />),
           
            headerTitle:()=> (
              <Image
                source={require("../../assets/FoodsImgs/restaurant (1).jpg")}
                style={[styles.headerImg, {height: 80}]}
              />
            ),
          }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Login"
          
          options={{
            header:()=> (<LoginHeader />),
          }}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationsContainer;
