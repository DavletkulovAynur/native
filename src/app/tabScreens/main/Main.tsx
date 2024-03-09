import { View } from "@/components/Themed";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  ImageBackground,
  ScrollView,
} from "react-native";
import LocationInput from "./LocationInput";
import Title from "./Title";
import Logo from "./Logo";
import Card from "./Card";
import bh from "@assets/images/bh.jpg";

const Main: React.FC<any> = ({ scrollPosition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Title /> */}
        <View style={styles.form}>
          <Logo />
          <LocationInput />
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
  container: {
    // height: "100%",
    // backgroundColor: "#89cffb",
  },
  header: {
    padding: 12,
    backgroundColor: "#89cffb",
    zIndex: 1,
  },
  form: {
    borderRadius: 10,
    padding: 12,
    position: "relative",
    top: 80,
    backgroundColor: "#fff",
  },
  test: {
    padding: 20,
    position: "relative",
  },
  logo: {
    // padding: 20,
    width: "auto",
    height: 300,
    borderRadius: 10,
    // resizeMode: "contain",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for the darkness level
    borderRadius: 10,
  },
});
