import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import logo from "@assets/images/logo.png";
import LocationInput from "./LocationInput";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Text style={styles.title}>Cheap flight and airline tickets</Text>
        <View style={styles.parent}>
          <Image style={styles.logo} source={logo as ImageSourcePropType} />
          <LocationInput />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  logo: {
    position: "relative",
    top: -50,
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  test: {
    padding: 12,
    backgroundColor: "#0db1b2",
  },
  title: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: "bold",
    //FIXME:
    color: "#fff",
  },
  parent: {
    marginTop: 10,

    borderRadius: 20,
    padding: 12,
    width: "100%",
    position: "relative",
    top: 40,
    backgroundColor: "#fff",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "#eef1f4",
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    padding: 12,
    overflow: "hidden",
  },
  inputContainer: {
    marginLeft: 10,
    width: "100%",
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
});
