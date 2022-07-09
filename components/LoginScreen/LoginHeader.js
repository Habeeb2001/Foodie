import { View, Text, Pressable } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { styles } from './LoginScreenStyle'
const LoginHeader = () => {
    return (
        <View style={styles.header}>
        <Pressable style={styles.backBtn}>
          <FontAwesome5 name="angle-left" size={20} />
        </Pressable>
        <Text></Text>
        <Pressable>
          <FontAwesome5 name="times" size={20} />
        </Pressable>
      </View>
    )
}

export default LoginHeader
