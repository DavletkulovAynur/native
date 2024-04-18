import React, { FC } from "react";
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import RouteItem from "./RouteItem";
import { ErrorBlock } from "@/components";

import { OrderApi } from "@/app/api";

interface IProps {
  dataOrderApi: ReturnType<typeof OrderApi.useGetOrdersQuery>;
}
const RouteItems: FC<IProps> = ({ dataOrderApi }) => {
  const { data, isLoading, isError } = dataOrderApi;

  if (isError) {
    return <ErrorBlock />;
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RouteItem item={item} />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ marginBottom: 260 }} />}
      ListEmptyComponent={
        isLoading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <Text style={styles.noContentText}>
            К сожалению, ничего не найдено по данному запросу.
          </Text>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  noContentText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
    marginTop: 24,
  },
});

export default RouteItems;
