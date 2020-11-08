import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";

const DataScreen = (props) => {
  const data1 = [
    -40,
    -30,
    -20,
    -10,
    0,
    10,
    20,
    30,
    40,
    50,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const data2 = [
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    0,
    -10,
    -20,
    -30,
    -40,
    -50,
    -60,
  ];
  const data = [
    {
      data: data1,
      svg: { stroke: cor.azul },
    },
    {
      data: data2,
      svg: { stroke: cor.verde },
    },
  ];
  const verticalContent = { top: 10, bottom: 10 };
  const axesSvg = { fontSize: 10, fill: "grey" };
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
          text: "Estatísticas",
          style: { color: "#fff", fontFamily: "sofia-pro" },
        }}
      />
      <View style={styles.centeredView}>
        <View
          style={{ height: 200, flexDirection: "row", backgroundColor: "#fff" }}
        >
          <YAxis data={data1} contentInset={verticalContent} svg={axesSvg} />
          <LineChart
            style={{ flex: 1, height: 200, width: "90%" }}
            data={data}
            //svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
          <YAxis data={data2} contentInset={verticalContent} svg={axesSvg} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: cor.azul,
  },
  menu: {
    marginLeft: 10,
    width: "100%",
  },
});
export default DataScreen;
