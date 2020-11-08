import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SensoresScreen from "./screens/SensoresScreen";
import DataScreen from "./screens/DataScreen";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";
import cor from "./constants/colors";
import { FontAwesome } from "@expo/vector-icons";

var firebaseConfig = {
  apiKey: "AIzaSyA9sAULTDVdnvTDYWJHTxHzsecrvMYV-T4",
  authDomain: "plantaintel.firebaseapp.com",
  databaseURL: "https://plantaintel.firebaseio.com",
  projectId: "plantaintel",
  storageBucket: "plantaintel.appspot.com",
  messagingSenderId: "366479663043",
  appId: "1:366479663043:web:7549b2d2c0ada526382776",
};
firebase.initializeApp(firebaseConfig);

const Tab = createMaterialBottomTabNavigator();
const AuthTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//const Background = require('/imgs/logo.jpeg');

const fetchFonts = () => {
  return Font.loadAsync({
    "sofia-pro": require("./assets/fonts/sofia-pro-light.otf"),
  });
};

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged((user) => {
    callback({ loggedIn: user });
  });
};

import { Sidebar } from "./components/Sidebar";

export default () => {
  const [user, setUser] = React.useState({ loggedIn: false });
  useEffect(() => {
    const machadoCouto = onAuthStateChange(setUser);
    return () => {
      machadoCouto();
    };
  });
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      {user.loggedIn ? (
        <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
          <Drawer.Screen name="Estatísticas" component={DataScreen} />
          <Drawer.Screen name="Sensores" component={SensoresScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name == "SignIn") {
                iconName = "sign-in";
              } else if (route.name == "SignUp") {
                iconName = "user-plus";
              }
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "gray",
            tabStyle: {
              height: 50,
              backgroundColor: cor.azul,
            },
          }}
        >
          <AuthTab.Screen name="SignIn" component={SignInScreen} />
          <AuthTab.Screen name="SignUp" component={SignUpScreen} />
        </AuthTab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    backgroundColor: cor.azul,
    marginBottom: 2,
  },
  name: {
    color: "#52A123",
  },
});
