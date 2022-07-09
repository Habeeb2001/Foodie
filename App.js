import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodsScreen from './components/FoodsScreen/FoodsScreen';
import { Dimensions } from 'react-native';
import NavigationsContainer from './components/NavigationsContainer/NavigationsContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationsContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    backgroundColor: '#fff',
    fontFamily: "Arial",
  },
});
