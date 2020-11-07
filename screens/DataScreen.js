import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";

const DataScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor={cor.verde}
        leftComponent={
          <TouchableOpacity
            style={styles.menu}
            onPress={() => props.navigation.openDrawer()}
            delayPressIn={0}
          >
            <Feather name="menu" color="#fff" size={20} />
          </TouchableOpacity>
        }
        centerComponent={{ text: "Estatísticas", style: { color: "#fff" } }}
      />
      <View style={styles.centeredView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cor.azul,
  },
  menu: {
    marginLeft: 10,
    width: "100%",
  },
});
export default DataScreen;
