import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import { Feather } from "@expo/vector-icons";
import cor from "../constants/colors";

const DataScreen = (props) => {
  const data1 = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
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
    80,
  ];
  const data = [
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
        <View style={styles.topmenu}>

        </View>
        <View
          style={styles.chart}
        >
          <YAxis data={data1} contentInset={verticalContent}  numberOfTicks={10} svg={axesSvg} />
          <LineChart
            style={{ flex: 1, height: "100%", width: "90%" }}
            data={data}
            //svg={{ stroke: "rgb(134, 65, 244)" }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
            
          </LineChart>
        </View>
        
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
  chart: {
    height: "45%",
    width: "95%",
    marginLeft: 10,
    flexDirection: "row",
    backgroundColor: "#fff"
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
