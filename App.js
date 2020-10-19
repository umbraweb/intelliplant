import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SensoresScreen from "./screens/SensoresScreen";
import DataScreen from "./screens/DataScreen";
import * as firebase from "firebase";

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

const AuthTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default () => {
  const [userToken, setUserToken] = React.useState();

  return (
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Sensores" component={SensoresScreen} />
          <Drawer.Screen name="Estatísticas" component={DataScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthTab.Navigator>
          <AuthTab.Screen name="SignIn" component={SignInScreen} />
          <AuthTab.Screen name="SignUp" component={SignUpScreen} />
        </AuthTab.Navigator>
      )}
    </NavigationContainer>
  );
};
