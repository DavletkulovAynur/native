import { Linking, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import LocationInput from "./common";
import useFormattedPhoneNumber from "@/hooks/useFormattedPhoneNumber";
import { useMemo } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Routes = () => {
  // const getFormattedNumber = useMemo(() => useFormattedPhoneNumber(), []);

  const phoneNumber = "+7 (929) 579-77-80";

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <LocationInput />
      </View>
      <ScrollView style={styles.offers}>
        <View style={styles.wrapper}>
          <View style={styles.card}>
            <Text style={styles.title}>РУБ 1400</Text>
            <Text style={styles.name}>Юлдаш</Text>

            <Text style={styles.phone}>{phoneNumber}</Text>
          </View>
          <View>
            <FontAwesome name="telegram" size={32} color="black" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  form: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginTop: 60,
  },
  offers: {
    marginTop: 20,
  },

  card: {
    // width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    color: "#5a6472",
    marginBottom: 16,
  },
  phone: {
    fontSize: 20,
  },
  wrapper: {
    // width: "100%",
    // flex: 1,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
