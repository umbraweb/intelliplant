import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const InputBox = (props) => {
  return (
    <View>
      <TextInput style={styles.box} placeholder={props.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    width: "80%",
  },
});

export default InputBox;
