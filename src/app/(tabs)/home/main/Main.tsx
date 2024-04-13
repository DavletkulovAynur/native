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
    <View>
      <View style={[styles.header]}>
        <Title />
        <View style={[styles.form, { backgroundColor: colors.base }]}>
          <Logo />
          <LocationInput iconName="search" />
        </View>
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
  },
  form: {
    borderRadius: 10,
    padding: 12,
    position: "relative",
    top: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: "auto",
    height: 300,
    borderRadius: 10,
  },
});
