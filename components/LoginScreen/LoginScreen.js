
import { Pressable, View, Text, TextInput} from 'react-native';
import { styles } from './LoginScreenStyle';
const LoginScreen = ({navigation}) => {
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
          Welcome back!
        </View>
        <View style={{ marginHorizontal: 15, color: "gray" }}>
          Sign in
        </View>
        
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
          Don't have an account?{" "}
          <Pressable
            style={{ fontSize: "larger", color: "#1f62e0" }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign up
          </Pressable>
        </Text>
        <Pressable style={styles.signupButton}>Sign in</Pressable>
      </View>
    )
}

export default LoginScreen
