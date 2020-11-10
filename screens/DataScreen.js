import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";

const DataScreen = (props) => {
  const data0 = [
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    0
  ];
  const data1 = [
    78,
    73,
    61,
    58,
    56,
    55,
  ];
  const data2 = [
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
  ];
  const data3 = [
    60,
    60,
    60,
    60,
    60,
    60,
    60,
    60,
    60,
    60,
  ];
  const data4 = [
    80,
    80,
    80,
    80,
    80,
    80,
    80,
    80,
    80,
    80,
  ];
  const data5 = [
    77.5,
    72,
    67,
    62,
    57,
    52,
    47,
    42,
    37,
    32,
  ];
  const data = [
    {
      data: data0,
      svg: { stroke: "black" },
    },
    {
      data: data1,
      svg: { stroke: "white" },
    },
    {
      data: data2,
      svg: { stroke: "red" },
    },
    {
      data: data3,
      svg: { stroke: "green" },
    },
    {
      data: data4,
      svg: { stroke: "red" },
    },
    {
      data: data5,
      svg: { stroke: "yellow" },
    },
  ];
  const verticalContent = { top: 10, bottom: 10 };
  const axesSvg = { fontSize: 10, fill: cor.branco };
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
        <View style={styles.topmenu}>

        </View>
        <View style={styles.chart}>
          <YAxis data={data0} contentInset={verticalContent} numberOfTicks={10} svg={axesSvg} />
          <LineChart
            style={styles.graph}
            data={data}
            //svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={{ top: 20, bottom: 20, right: -30}}
          >
          <Grid />  
          </LineChart>  
        </View>
        <XAxis data={data0} contentInset={{right:100}} numberOfTicks={10} svg={axesSvg} />
        <View style={styles.info}>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: cor.azul,
  },
  menu: {
    marginLeft: 10,
    width: "100%",
  },
  graph: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  chart: {
    height: "45%",
    width: "90%",
    marginLeft: 30,
    flexDirection: "row",
    backgroundColor: "black"
  },
  topmenu:{
    alignSelf: "center",
    backgroundColor: cor.branco,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    height: "7%",
    marginTop: 10,
  },
  info:{
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: cor.branco,
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    height: "35%",
  },
});
export default DataScreen;
