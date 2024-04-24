import React, { FC } from "react";

import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useTheme } from "@/app/theme";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { TOrder } from "@/app/api/order/types";

interface IProps {
  item: TOrder;
}

const RouteItem: FC<IProps> = ({ item }) => {
  const { agency, price } = item;
  //FIXME:  список номеров получаем массивом, возможно надо будет переписать
  const phoneNumber = formatPhoneNumberIntl(agency.phones[0]);
  const { colors } = useTheme();

  //FIXME: нужно передавать phoneNumber
  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.base }]}>
      <View style={[{ backgroundColor: colors.base }]}>
        <Text style={styles.title}>РУБ {price}</Text>
        <Text style={[styles.name, { color: colors.secondaryText }]}>
          {agency.name}
        </Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.phone}>{phoneNumber}</Text>
        </TouchableOpacity>
      </View>
      <View style={[{ backgroundColor: colors.base }]}>
        <FontAwesome name="telegram" size={32} color="black" />
      </View>
    </View>
  );
};

export default RouteItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    marginBottom: 16,
  },
  phone: {
    fontSize: 20,
  },
  wrapper: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
