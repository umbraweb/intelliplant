import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Switch,
  FlatList,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { Header } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";
import { Avatar } from "react-native-paper";

const SensoresScreen = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [enteredSensor, setEnteredSensor] = useState("");
  const [userSensor, setUserSensors] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const sensorInputHandler = (enteredText) => {
    setEnteredSensor(enteredText);
  };

  const addSensorHandler = (sensorTitle) => {
    setUserSensors((currentSensors) => [
      ...currentSensors,
      {
        key: Math.random().toString(),
        value: sensorTitle,
        switch: false,
        umidade: Math.floor(Math.random() * 100),
        bateria: Math.floor(Math.random() * 100),
      },
    ]);
    setModalOpen(false);
    setEnteredSensor("");
  };
  const cancelModal = () => {
    setModalOpen(false);
    setEnteredSensor("");
  };
  const removeSensorHandler = (sensorId) => {
    setUserSensors((currentSensors) => {
      return currentSensors.filter((sensor) => sensor.key !== sensorId);
    });
  };
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
        <Modal visible={isModalOpen} animationType="slide">
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Código do Sensor"
              style={styles.input}
              onChangeText={sensorInputHandler}
              value={enteredSensor}
            />
            <View style={styles.button}>
              <Button
                color={cor.azul}
                title="Adicionar"
                onPress={() => addSensorHandler(enteredSensor)}
              />
              <Button
                color={cor.verde}
                title="Cancelar"
                onPress={cancelModal}
              />
            </View>
          </View>
        </Modal>

        <FlatList
          keyExtractor={(item, index) => item.key}
          data={userSensor}
          renderItem={(itemData) => (
            <View style={styles.box}>
              <View style={(styles.image, styles.dummy)}>
                <Avatar.Image
                  style={styles.avatar}
                  source={require("../assets/irrig_1.png")}
                  size={65}
                />
                <Text style={styles.name}>{itemData.item.value}</Text>
                <Switch
                  style={styles.switch}
                  trackColor={{ false: "#767577", true: cor.verde }}
                  thumbColor={isEnabled ? cor.azul : "#f4f3f4"}
                  onValueChange={() => {
                    itemData.item.switch = !itemData.item.switch;
                  }}
                  value={itemData.item.switch}
                />
              </View>
              <View style={(styles.image, styles.dummy)}>
                <Text style={styles.description}>Umidade</Text>
                <Image
                  source={require("../assets/water_1.png")}
                  style={styles.icons}
                />
                <Text style={styles.percentage}>{itemData.item.umidade}% </Text>
              </View>
              <View style={styles.dummy}>
                <Text style={styles.description}>Bateria</Text>
                <Image
                  source={require("../assets/battery.png")}
                  style={styles.icons}
                />
                <Text style={styles.percentage}>{itemData.item.bateria}% </Text>
              </View>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalOpen(true)}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../assets/add.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    backgroundColor: cor.azul,
  },
  dummy: {
    borderWidth: 1,
    borderColor: "white",
    width: 100,
  },
  box: {
    justifyContent: "space-evenly",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
    height: 150,
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  },
  avatar: {
    alignSelf: "center",
    marginTop: 12,
  },
  name: {
    alignSelf: "center",
    marginTop: 10,
    fontFamily: "sofia-pro",
  },
  switch: {
    marginTop: 5,
    alignSelf: "center",
    marginRight: -5,
  },
  image: {
    marginTop: 0,
    marginLeft: 30,
  },
  description: {
    fontFamily: "sofia-pro",
    marginTop: 10,
    textAlign: "center",
  },
  icons: {
    height: "25%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  percentage: {
    fontFamily: "sofia-pro",
    marginTop: 10,
    textAlign: "center",
  },
  buttonIcon: {
    height: "30%",
    width: "30%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 5,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  addButton: {},
});
export default SensoresScreen;
