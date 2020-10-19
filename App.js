import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SensoresScreen from "./screens/SensoresScreen";
import DataScreen from "./screens/DataScreen";

const AuthTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Sensores" component={SensoresScreen} />
      <Drawer.Screen name="Estatísticas" component={DataScreen} />
    </Drawer.Navigator>
  </NavigationContainer>

  /*<NavigationContainer>
    <AuthTab.Navigator>
      <AuthTab.Screen name="SignIn" component={SignInScreen} />
      <AuthTab.Screen name="SignUp" component={SignUpScreen} />
    </AuthTab.Navigator>
  </NavigationContainer>*/
);
