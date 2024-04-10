import { View } from "@/components/Themed";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, RefreshControl } from "react-native";
import LocationInput from "../common/LocationInput";
import Title from "./Title";
import Logo from "./Logo";
import Card from "./Card";
import { useTheme } from "@/app/theme";

const Main: React.FC<any> = ({ scrollPosition }) => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Title />
        <View style={[styles.form, { backgroundColor: colors.base }]}>
          <Logo />
          <LocationInput iconName="search" />
        </View>
      </View>
      <View>
        <Card />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    zIndex: 1,
  },
  form: {
    borderRadius: 10,
    padding: 12,
    position: "relative",
    top: 50,
  },
  logo: {
    width: "auto",
    height: 300,
    borderRadius: 10,
  },
});
