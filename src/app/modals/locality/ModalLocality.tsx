import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useState } from "react";
import Localities from "./Localities";
import Form from "./Form";
import { LocalityApi } from "@/app/api";
import { FOCUS_INPUT } from "./types";

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
    <View style={styles.container}>
      <Form setSearch={setSearch} setFocus={setFocus} />
      <Localities
        localities={data}
        isLoadingData={isLoadingData}
        focus={focus}
        isError={isError}
      />
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
