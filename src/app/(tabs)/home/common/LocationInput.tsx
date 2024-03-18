// LocationInput.js
import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store/store";
import { TPoint } from "@/app/store/slices/types";

interface IProps {
  iconName: string;
}

const LocationInput: FC<IProps> = ({ iconName }) => {
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const goBackToMainPage = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goBackToMainPage}>
        <View style={styles.iconContainer}>
          <FontAwesome name={iconName as any} size={24} color="black" />
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        {renderPointText(pointOfDeparture, "Откуда")}
        <View style={styles.separator} />
        {renderPointText(pointOfArrival, "Куда")}
      </View>
    </View>
  );
};

const renderPointText = (point: TPoint | null, placeholder: string) => (
  <Pressable
    onPress={() =>
      router.push({
        pathname: "/locality",
      } as any)
    }
  >
    <Text style={point ? styles.point : styles.pointNotSpecified}>
      {point?.name || placeholder}
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
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
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
