import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { Header } from "react-native-elements";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";

const DataScreen = (props) => {
  const data0 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
  const data1 = [78, 73, 61, 58, 56, 55];
  const data2 = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
  const data3 = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
  const data4 = [83, 83, 83, 83, 83, 83, 83, 83, 83, 83];
  const data5 = [77, 72, 67, 62, 57, 52, 47, 42, 37, 32];
  const data6 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

  const data = [
    {
      data: data0,
      svg: { stroke: "black" },
    },
    {
      data: data1,
      svg: { stroke: cor.azul },
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
  const horizontalContent = {
    top: 10,
    bottom: 10,
    left: 20,
    right: 20,
  };
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
        <View
          style={
            (styles.topmenu,
            { flexDirection: "row", justifyContent: "space-evenly" })
          }
        >
          <View style={{ borderBottomColor: cor.branco, borderBottomWidth: 2 }}>
            <Text style={{ color: "white" }}>Diário</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>Semanal</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>Mensal</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <YAxis
            data={data0}
            contentInset={verticalContent}
            numberOfTicks={10}
            svg={axesSvg}
            formatLabel={(value) => `${value}%`}
          />
          <LineChart
            style={styles.graph}
            data={data}
            //svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={{ top: 20, bottom: 20, right: -30 }}
          >
            <Grid />
          </LineChart>
        </View>
        <View
          styles={{
            borderColor: "white",
            alignSelf: "center",
            borderWidth: 2,
          }}
        >
          <XAxis
            data={data0}
            contentInset={horizontalContent}
            numberOfTicks={10}
            svg={axesSvg}
            formatLabel={(value) => value - 6}
          />
        </View>
        <View style={styles.info}>
          <Text style={{ color: "white" }}>
            Intervalo de tempo em análise: 10h
          </Text>
          <Text style={{ color: "white" }}> </Text>
          <Text style={{ color: "white" }}> Umidade do Solo: </Text>
          <Text style={{ color: "white" }}> </Text>
          <Text style={{ color: "red" }}> Limite Inferior = 80%</Text>
          <Text style={{ color: "green" }}> Ideal = 60%</Text>
          <Text style={{ color: "red" }}> Limite Superior = 40% </Text>
          <Text style={{ color: cor.azul }}>
            Medição do sensor (t = 0) = 55%{" "}
          </Text>
          <Text style={{ color: "yellow" }}>
            Previsão de umidade em 1h (t = 1): 47%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
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
    width: "100%",
    flexDirection: "row",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 2,
  },
  topmenu: {
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 5,
    width: "35%",
    height: "7%",
    marginTop: 10,
    marginLeft: 10,
  },
  info: {
    marginBottom: 20,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "90%",
    height: "35%",
  },
});
export default DataScreen;
