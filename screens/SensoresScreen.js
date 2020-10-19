import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SensoresScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text> Sensores</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SensoresScreen;
