import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";
import { FOCUS_INPUT, TModalLocalitySearchParams } from "./types";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components";
import { useLocalSearchParams } from "expo-router";

const ModalLocality: FC = () => {
  const { focusInput }: TModalLocalitySearchParams = useLocalSearchParams();
  const [focus, setFocus] = useState<string>(focusInput || FOCUS_INPUT.DEPARTURE);
  const [search, setSearch] = useState<string>("");
  const { data = [], isLoading, isFetching, isError } = LocalityApi.useGetLocalitiesQuery({ search });
  const isLoadingData = isLoading || isFetching;

  return (
    <View style={styles.container}>
      <Form setSearch={setSearch} setFocus={setFocus} focus={focus} />
      <Localities localities={data} isLoadingData={isLoadingData} focus={focus} isError={isError} />
      <Toast config={toastConfig} />
    </View>
  );
};

export default ModalLocality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
