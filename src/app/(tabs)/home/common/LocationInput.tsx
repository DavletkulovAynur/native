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
import { FOCUS_INPUT } from "@/app/modals/locality/types";

interface IProps {
  iconName: string;
  actionFunction?: () => void;
}

const LocationInput: FC<IProps> = ({ iconName, actionFunction }) => {
  const { colors } = useTheme();
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  //FIXME: передать функцию в props
  const handlePress = () => {
    actionFunction?.();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.iconContainer}>
          <FontAwesome name={iconName as any} size={24} />
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        <RenderPointText
          point={pointOfDeparture}
          placeholder={"Откуда"}
          focusInput={FOCUS_INPUT.DEPARTURE}
        />
        <Separator />
        <RenderPointText
          point={pointOfArrival}
          placeholder={"Куда"}
          focusInput={FOCUS_INPUT.ARRIVAL}
        />
      </View>
    </View>
  );
};

const RenderPointText: any = ({ point, placeholder, focusInput }: any) => {
  const { colors } = useTheme();
  const textColor = point ? undefined : colors.secondaryText;

  //TODO: передаем параметры в компонент
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/locality",
          params: { focusInput },
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
    borderRadius: 20,
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
    paddingVertical: 12,
  },
  pointNotSpecified: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});

export default LocationInput;
