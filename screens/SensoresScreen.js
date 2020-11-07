import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
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
        centerComponent={{
          text: "Sensores",
          style: { color: "#fff", fontFamily: "sofia-pro" },
        }}
      />
      <View style={styles.centeredView}>
        <View style={styles.box}>
          <View style={(styles.image, styles.dummy)}>
            <Avatar.Image source={require("../assets/irrig_1.png")} size={65} />
            <Text style={{ marginLeft: 7, fontFamily: "sofia-pro" }}>
              Sensor A
            </Text>
          </View>
          <View style={(styles.image, styles.dummy)}>
            <Text style={{ textAlign: "center" }}>Umidade</Text>
            <Image
              source={require("../assets/water_1.png")}
              style={{
                height: "20%",
                width: "80%",
                resizeMode: "contain",
              }}
            />
            <Text style={{ textAlign: "center" }}>55% </Text>
          </View>
          <View style={styles.dummy}>
            <Text>terceira parte, justiça e disciplina</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    borderWidth: 1,
    borderColor: "black",
    width: 100,
  },
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
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10,
    height: 200,
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  },
  image: {
    marginTop: 30,
    marginLeft: 30,
  },
  moisture: {},
  name: {
    fontFamily: "sofia-pro",
  },
});
export default SensoresScreen;
