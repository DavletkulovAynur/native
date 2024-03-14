import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";

const ModalLocality = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isFetching } = LocalityApi.useGetLocalitiesQuery({
    search,
  });

  if(!data) return
  const isLoadingData = isLoading || isFetching;

  return (
    <View style={styles.container}>
      <Form setSearch={setSearch} />
      <Localities localities={data} isLoadingData={isLoadingData} />
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
