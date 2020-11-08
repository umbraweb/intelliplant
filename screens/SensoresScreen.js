import React, {useState} from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, Switch } from "react-native";
import { Header } from "react-native-elements";

import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";
import { Avatar } from "react-native-paper";

const SensoresScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
              <Avatar.Image style = {styles.avatar} source={require("../assets/irrig_1.png")} size={65}/>
            <Text style={styles.name}>
              Sensor A
            </Text>
            <Switch style = {styles.switch}
              trackColor={{ false: "#767577", true: cor.verde }}
              thumbColor={isEnabled ? cor.azul : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={(styles.image, styles.dummy)}>
            <Text style={styles.description}>Umidade</Text>
            <Image
              source={require("../assets/water_1.png")}
              style={styles.icons}
            />
            <Text style={styles.percentage}>55% </Text>
          </View>
          <View style={styles.dummy}>
            <Text style={styles.description}>Bateria</Text>
            <Image
              source={require("../assets/battery.png")}
              style={styles.icons}
            />
            <Text style={styles.percentage}>80% </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={(styles.image, styles.dummy)}>
              <Avatar.Image style = {styles.avatar} source={require("../assets/irrig_1.png")} size={65}/>
            <Text style={styles.name}>
              Sensor B
            </Text>
            <Switch style = {styles.switch}
              trackColor={{ false: "#767577", true: cor.verde }}
              thumbColor={isEnabled ? cor.azul : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={(styles.image, styles.dummy)}>
            <Text style={styles.description}>Umidade</Text>
            <Image
              source={require("../assets/water_1.png")}
              style={styles.icons}
            />
            <Text style={styles.percentage}>55% </Text>
          </View>
          <View style={styles.dummy}>
            <Text style={styles.description}>Bateria</Text>
            <Image
              source={require("../assets/battery.png")}
              style={styles.icons}
            />
            <Text style={styles.percentage}>80% </Text>
          </View>
        </View>
        <Image style = {styles.button}
          source={require('../assets/add.png')}
        />
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
  avatar:{
    alignSelf: "center",
    marginTop: 12,
  },
  name: {
    alignSelf: "center",
    marginTop: 10,
    fontFamily: "sofia-pro"
  },
  switch:{
    marginTop: 5,
    alignSelf: "center",
    marginRight: -5
  },
  image: {
    marginTop: 0,
    marginLeft: 30,
  },
  description:{
    fontFamily: "sofia-pro",
    marginTop: 10,
    textAlign: "center",
  },
  icons:{
    height: "25%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  percentage:{
    fontFamily: "sofia-pro",
    marginTop: 10,
    textAlign: "center",
  },
  button:{
    height: "15%",
    width: "15%",
    resizeMode: "contain",
    alignSelf: "center",
  }
});
export default SensoresScreen;
