import React, { FC } from "react";
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { StyleSheet } from "react-native";
import LocationInput from "./common";
import { useTheme } from "@/app/theme";
import { OrderApi } from "@/app/api";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { RouteItem } from "./routeComponents";

const Routes: FC = () => {
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const params = {
    originId: pointOfDeparture?.id,
    destinationId: pointOfArrival?.id,
  };

  const { data, isLoading, isError } =
    OrderApi.useGetOrdersQuery(params);

  const { colors } = useTheme();


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.base }]}>
      <View style={styles.container}>
        <View style={styles.form}>
          <LocationInput iconName="chevron-left" />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <RouteItem item={item} isError={isError} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ marginBottom: 260 }} />}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text>No orders found for the selected locations</Text>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});
