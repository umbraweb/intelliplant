import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SignInScreen = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox} placeholder="Usuario" />
      <TextInput style={styles.inputBox} placeholder="Senha" />
      <TouchableOpacity style={styles.button}>
        <Text> Log in </Text>
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
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "grey",
    width: "80%",
    height: 40,
    margin: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "pink",
  },
});
export default SignInScreen;
