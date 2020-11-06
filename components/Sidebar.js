import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export function Sidebar(props) {
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
            </View>
          </View>
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
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  userSection: {
    paddingLeft: 20,
  },
  botSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
