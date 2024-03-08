import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import logo from "@assets/images/logo.png";
import LocationInput from "./LocationInput";
import { MonoText } from "@/components/StyledText";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <MonoText style={styles.title}>
          Cheap flight and airline tickets
        </MonoText>
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
    marginTop: -40,
    marginBottom: 10,
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 20,
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
    textAlign: "center",
  },
  parent: {
    borderRadius: 20,
    padding: 12,
    // width: "100%",
    position: "relative",
    top: 40,
    backgroundColor: "#fff",
    alignItems: "center", // Add this line
    justifyContent: "center", // Add this line
  },
});
