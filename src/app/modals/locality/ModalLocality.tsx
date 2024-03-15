import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";
import { updatePointOfDeparture } from "@/app/store/slices/localitySlice";
import { FOCUS_INPUT } from "./types";

const ModalLocality = () => {
  //НА КАКОМ ИНПУТЕ FOCUS
    const [focus, setFocus] = useState<string>(FOCUS_INPUT.DEPARTURE);
  //
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isFetching } = LocalityApi.useGetLocalitiesQuery({
    search,
  });

  if(!data) return
  const isLoadingData = isLoading || isFetching;

  return (
    <View style={styles.container}>
      <Form setSearch={setSearch} setFocus={setFocus}/>
      <Localities localities={data} isLoadingData={isLoadingData} focus={focus} />
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
