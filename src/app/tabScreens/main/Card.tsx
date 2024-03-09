import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import ufa from "@assets/images/ufa.jpg";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Горячие предложения</Text>
      <View style={styles.card}>
        <View>
          <Image style={styles.logo} source={ufa as ImageSourcePropType} />
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.costText}>RUB 1.000</Text>
          <Text style={styles.departureText}>Баймак - Уфа</Text>
          <Text style={styles.taxiParkText}>Юлдаш</Text>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>ЗАКАЗАТЬ</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fae569",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#1f1e22",
  },
  container: {
    backgroundColor: "#f2fafe",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  rightContent: {
    marginLeft: 10,
  },
  departureText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  arrivalText: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 8,
  },
  costText: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  numberText: {
    fontSize: 16,
    color: "#FFF",
  },
  taxiParkText: {
    fontSize: 14,
    color: "#FFF",
    fontStyle: "italic",
  },
});
export default Card;
