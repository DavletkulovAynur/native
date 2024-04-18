import React, { FC } from "react";

import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface IProps {
  item: any;
  isError: boolean;
}

const RouteItem: FC<IProps> = ({ item, isError }) => {
  const { agency, price } = item;

  // const phoneNumber = "+7 (929) 579-77-80";

  // const handlePhonePress = () => {
  //   Linking.openURL(`tel:${phoneNumber}`);
  // };

  // const getFormattedNumber = useMemo(() => {
  //   // Assuming useFormattedPhoneNumber is your formatting function
  //   return useFormattedPhoneNumber();
  // }, []);

  if (isError) {
    return (
      <View>
        <Text>Failed to fetch data from server. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{price}</Text>
        <Text style={styles.name}>{agency.name}</Text>
        <Text style={styles.phone}>{agency.phones[0]}</Text>
      </View>
      <View>
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
    backgroundColor: "#fff",
  },
});
