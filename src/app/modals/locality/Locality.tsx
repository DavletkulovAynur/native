import { TLocality } from "@/app/api/locality/types";
import {
  updatePointOfArrival,
  updatePointOfDeparture,
} from "@/app/store/slices/localitySlice";
import { useTheme } from "@/app/theme";
import { View, Text } from "@/components/Themed";
import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

interface IProps {
  item: TLocality;
  focus: string;
}

const Locality: FC<IProps> = ({ item, focus }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const updateFunction =
    focus === "departureInput" ? updatePointOfDeparture : updatePointOfArrival;

  const setLocation = (location: TLocality) => {
    dispatch(
      updateFunction({
        name: location.name,
        id: location.id,
      })
    );
  };

  const { name, district } = item;
  return (
    <Pressable onPress={() => setLocation(item)}>
      <View
        style={[
          styles.item,
          {
            backgroundColor: colors.base,
            borderBottomColor: colors.separator,
          },
        ]}
      >
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{district}</Text>
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
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#5a6472",
  },
});
