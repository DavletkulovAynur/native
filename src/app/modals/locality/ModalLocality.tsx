import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";

const ModalLocality = () => {
  const [destinationValue, setDestinationValue] = useState("Уфа");

  return (
    <View style={styles.container}>
      <Form destinationValue={destinationValue} />
      <Localities />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default ModalLocality;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
