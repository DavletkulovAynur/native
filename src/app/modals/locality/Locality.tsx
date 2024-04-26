import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { TLocality } from "@/app/api/locality/types";
import {
  updatePointOfArrival,
  updatePointOfDeparture,
} from "@/app/store/slices/localitySlice";
import { useTheme } from "@/app/theme";
import { View, Text } from "@/components/Themed";

interface IProps {
  item: TLocality;
  focus: string;
}

const Locality: FC<IProps> = ({ item, focus }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const handleLocationPress = () => {
    const updateFunction =
      focus === "departureInput"
        ? updatePointOfDeparture
        : updatePointOfArrival;
    if (updateFunction) {
      dispatch(updateFunction({ name: item.name, id: item.id }));
    }
  };

  const { name, district } = item;

  return (
    <Pressable
      onPress={handleLocationPress}
      accessible={true}
      accessibilityLabel={`${name}, ${district}`}
    >
      <View
        style={[
          styles.item,
          { backgroundColor: colors.base, borderBottomColor: colors.separator },
        ]}
      >
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
          {district}
        </Text>
      </View>
    </Pressable>
  );
};

export default Locality;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
  },
});
