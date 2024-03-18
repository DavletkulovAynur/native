import { View } from "@/components/Themed";
import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import LocationInput from "../common/LocationInput";
import Title from "./Title";
import Logo from "./Logo";
import Card from "./Card";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "@/app/theme/ThemeContext";

const Main: React.FC<any> = ({ scrollPosition }) => {
  const { colors } = useTheme();
  const a = useContext(ThemeContext);
  
  return (
    <View>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Title />
        <View style={[styles.form, { backgroundColor: colors.text }]}>
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
  test: {
    padding: 20,
    position: "relative",
  },
  logo: {
    width: "auto",
    height: 300,
    borderRadius: 10,
  },
});
