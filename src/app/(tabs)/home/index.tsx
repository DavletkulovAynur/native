import React, { useRef, useState } from "react";
import { View, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import Main from "@/app/tabScreens/main";

export default function One() {
  return (
    <View>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#89cffb",
  },
});
