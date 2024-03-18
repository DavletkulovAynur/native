import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import Main from "./main";
import { router } from "expo-router";

export default function One() {
  return (
    <View style={styles.container}>
      <Main />
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/home/routes",
          } as any)
        }
      ></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#89cffb",
  },
});
