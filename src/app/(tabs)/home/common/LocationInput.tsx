// LocationInput.js
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store/store";

const LocationInput = () => {
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="search" size={24} color="black" />
      </View>
      <View style={styles.inputContainer}>
        {renderPointText(pointOfDeparture, "Откуда")}
        <View style={styles.separator} />
        {renderPointText(pointOfArrival, "Куда")}
      </View>
    </View>
  );
};

const renderPointText = (point: string, placeholder: string) => (
  <Pressable
    onPress={() =>
      router.push({
        pathname: "/locality",
      } as any)
    }
  >
    <Text style={point ? styles.point : styles.pointNotSpecified}>
      {point || placeholder}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eef1f4",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    overflow: "hidden",
  },
  iconContainer: {
    marginRight: 10,
  },
  inputContainer: {
    width: "100%",
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f1e22",
  },
  pointNotSpecified: {
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

export default LocationInput;
