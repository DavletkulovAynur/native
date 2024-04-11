// LocationInput.js
import React, { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store/store";
import { TPoint } from "@/app/store/slices/types";
import { View } from "@/components/Themed";
import Separator from "@/components";
import { useTheme } from "@/app/theme";

interface IProps {
  iconName: string;
}

const LocationInput: FC<IProps> = ({ iconName }) => {
  const { colors } = useTheme();
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
          <FontAwesome name={iconName as any} size={24} />
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        <RenderPointText point={pointOfDeparture} placeholder={"Откуда"} />
        <Separator />
        <RenderPointText point={pointOfArrival} placeholder={"Куда"} />
      </View>
    </View>
  );
};

const RenderPointText: any = ({ point, placeholder }: any) => {
  const { colors } = useTheme();
  const textColor = point ? undefined : colors.secondaryText;

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/locality",
        } as any)
      }
    >
      <Text
        style={[
          point ? styles.point : styles.pointNotSpecified,
          { color: textColor },
        ]}
      >
        {point?.name || placeholder}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
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
    paddingVertical: 12,
  },
  pointNotSpecified: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});

export default LocationInput;
