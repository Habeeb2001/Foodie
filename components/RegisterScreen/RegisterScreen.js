import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  TextInputComponent,
  TextInput,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IonIcons from "react-native-vector-icons/Ionicons";
import { styles } from "./RegisterScreenStyle";
import React from "react";
const RegisterScreen = ({ navigation }) => {
  React.useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          fontSize: 30,
          fontWeight: 600,
          marginTop: 20,
          marginHorizontal: 15,
        }}
      >
        Hi
      </View>
      <View style={{ marginHorizontal: 15, color: "gray" }}>
        Register Account
      </View>
      <Text style={{ marginHorizontal: 15, marginVertical: 10, fontSize: 15 }}>
        Username
      </Text>
      <TextInput
        multiline={false}
        placeholder="username"
        placeholderTextColor={"rgba(0,0, 0, 0.5)"}
        underlineColorAndroid="transparent"
        style={styles.textInput}
      />
      <Text style={{ marginHorizontal: 15, marginVertical: 10, fontSize: 15 }}>
        Email
      </Text>
      <TextInput
        multiline={false}
        placeholder="johnDoe@gmail.com"
        placeholderTextColor={"rgba(0,0, 0, 0.5)"}
        underlineColorAndroid="transparent"
        style={styles.textInput}
      />
      <Text style={{ marginHorizontal: 15, marginVertical: 10, fontSize: 15 }}>
        password
      </Text>
      <TextInput
        multiline={false}
        placeholder="************"
        placeholderTextColor={"rgba(0,0, 0, 0.5)"}
        underlineColorAndroid="transparent"
        style={styles.textInput}
      />
      <Text style={{ marginHorizontal: 15, marginVertical: 10 }}>
        Already have and account?{" "}
        <Pressable
          style={{ fontSize: "larger", color: "#1f62e0" }}
          onPress={() => navigation.navigate("Login")}
        >
          sign in
        </Pressable>
      </Text>
      <Pressable style={styles.signupButton}>Register Account</Pressable>
    </View>
  );
};

export default RegisterScreen;
