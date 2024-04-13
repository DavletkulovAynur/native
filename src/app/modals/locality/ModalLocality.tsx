import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";
import { FOCUS_INPUT } from "./types";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components";

const ModalLocality = () => {
  const [focus, setFocus] = useState<string>(FOCUS_INPUT.DEPARTURE);

  const [search, setSearch] = useState<string>("");
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = LocalityApi.useGetLocalitiesQuery({
    search,
  });

  const isLoadingData = isLoading || isFetching;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Form setSearch={setSearch} setFocus={setFocus} />
        <Localities
          localities={data}
          isLoadingData={isLoadingData}
          focus={focus}
          isError={isError}
        />
      </View>
      <Toast config={toastConfig} />
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
  test: {
    zIndex: 1,
  },
});
