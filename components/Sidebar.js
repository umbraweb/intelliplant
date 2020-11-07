import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Drawer, Title, Caption } from "react-native-paper";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  FontAwesome,
} from "@expo/vector-icons";
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
              icon={() => (
                <Ionicons name="ios-radio" color={"black"} size={20} />
              )}
              label="Sensores"
              onPress={() => {
                props.navigation.navigate("Sensores");
              }}
            />
            <DrawerItem
              icon={() => <Octicons name="graph" color={"black"} size={20} />}
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
          icon={() => (
            <Ionicons name="ios-settings" color={"black"} size={20} />
          )}
          label="Configurações"
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="comment-question-outline"
              color={"black"}
              size={20}
            />
          )}
          label="FAQ"
        />
        <DrawerItem
          icon={() => <FontAwesome name="send-o" color={"black"} size={18} />}
          label="Fale Conosco"
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={"black"}
              size={17}
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
  drawerContent: { flex: 1, marginTop: 10 },
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
  midSection: {
    borderTopColor: "#f4f4f4",
    borderBottomWidth: 0,
  },
  botSection: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
