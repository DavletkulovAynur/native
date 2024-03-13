import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";

const ModalLocality = () => {
  //ДАННЫЕ ПОЛУЧАЕМ ТОЛЬКО ТУТ 
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isFetching } = LocalityApi.useGetLocalitiesQuery({
    search,
  });
  const [destinationValue, setDestinationValue] = useState("Уфа");

  return (
    <View style={styles.container}>
      <Form destinationValue={destinationValue} setSearch={setSearch} />
      <Localities localities={data} isLoading={isLoading} isFetching={isFetching} />
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
