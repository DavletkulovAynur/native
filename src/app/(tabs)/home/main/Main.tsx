import { View } from "@/components/Themed";
import React from "react";
import { StyleSheet } from "react-native";
import LocationInput from "../common/LocationInput";
import Title from "./Title";
import Logo from "./Logo";
import { useTheme } from "@/app/theme";

const Main: React.FC<any> = () => {
  const { colors } = useTheme();

  return (
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Title />
        <View style={[styles.form, { backgroundColor: colors.base }]}>
          <Logo />
          <LocationInput iconName="search" />
        </View>
      </View>
  );
};

export default Main;

//Shadow переделать
const styles = StyleSheet.create({
  header: {
    padding: 12,
    zIndex: 1,
    paddingBottom: 24,
  },
  form: {
    borderRadius: 20,
    padding: 12,
    position: "relative",
  },
  logo: {
    width: "auto",
    height: 300,
    borderRadius: 10,
  },
});
