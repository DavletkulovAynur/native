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
          {() => <Text style={styles.point}>Уфа</Text>}
        </Pressable>
        <View style={styles.separator} />
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/modal",
            } as any)
          }
        >
          {() => 
          <Text style={styles.test}>Куда</Text>}
        </Pressable>
      </View>
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    backgroundColor: "#eef1f4",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
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
  test: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5a6472",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
});
