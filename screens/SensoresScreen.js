import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const SensoresScreen = (props) => {
  const handleLogOut = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text> Sensores</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text> Log Out </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 4,
    height: 30,
    width: "80%",
  },
});
export default SensoresScreen;
