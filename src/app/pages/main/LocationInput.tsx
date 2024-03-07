// LocationInput.js
import React from "react";
import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
const LocationInput = () => {
  return (
    <View style={styles.form}>
      <View>
        <FontAwesome name="search" size={24} color="black" />
      </View>

      <View style={styles.inputContainer}>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/modal",
            } as any)
          }
        >
          {() => <Text style={styles.point}>Откуда</Text>}
        </Pressable>
        <View style={styles.separator} />
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/modal",
            } as any)
          }
        >
          {() => <Text style={styles.point}>Куда</Text>}
        </Pressable>
      </View>
    </View>
  );
};

export default LocationInput;

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
