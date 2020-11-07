import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";
import { Avatar } from "react-native-paper";

const SensoresScreen = (props) => {
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
        centerComponent={{ text: "Sensores", style: { color: "#fff" , fontFamily: 'sofia-pro'} }}
      />
      <View style={styles.centeredView}>
        <View style={styles.box}>
          <View style={styles.sensorIcon}>
            <Avatar.Image source={require("../assets/irrig_1.png")} size={65} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: cor.azul,
  },
  menu: {
    marginLeft: 10,
    width: "100%",
  },
  box: {
    marginTop: 10,
    height: 200,
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  },
  sensorIcon: {
    marginTop: 30,
    marginLeft: 30,
  },
});
export default SensoresScreen;
