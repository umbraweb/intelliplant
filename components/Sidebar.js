import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Drawer, Title, Caption } from "react-native-paper";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";
export function Sidebar(props) {
  const handleSignOut = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userSection}>
            <View style={{ flexDIrection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
                }}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Aderson fdp</Title>
                <Caption style={styles.caption}>@aderson_fdp</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.midSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-radio" color={color} size={size} />
              )}
              label="Sensores"
              onPress={() => {
                props.navigation.navigate("Sensores");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Octicons name="graph" color={color} size={size} />
              )}
              label="Estatísticas"
              onPress={() => {
                props.navigation.navigate("Estatísticas");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.botSection}>
        <DrawerItem
          icon={(color, size) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  userSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  botSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
