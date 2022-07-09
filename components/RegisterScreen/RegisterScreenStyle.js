import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#f1f1f1",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    height: "inherit",
    alignItems: "center",
    padding: 15,
    marginTop: 0,
    backgroundColor: "none",
    top: 0,
    bottom: 0,
  },
  headerImg: {
    flex: 1,
    width: "100%",
    height: 80,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  signupButton:{
    marginHorizontal: "auto",
    backgroundColor: "#f7b63f",
    padding: 10,
    width: "90%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    letterSpacing: 1,
    fontWeight: 500

  },
  textInput:{
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: "50%",
    flexDirection: "row",
    alignItems: "center"
  }
});
