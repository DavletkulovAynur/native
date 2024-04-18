import React, { FC } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import LocationInput from "./common";
import { useTheme } from "@/app/theme";
import { OrderApi } from "@/app/api";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { RouteItems } from "./routeComponents";

const Routes: FC = () => {
  const { colors } = useTheme();
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const params = {
    originId: pointOfDeparture?.id,
    destinationId: pointOfArrival?.id,
  };

  const dataOrderApi = OrderApi.useGetOrdersQuery(params);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.base }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.form, { backgroundColor: colors.base }]}>
          <LocationInput iconName="chevron-left" />
        </View>
        <RouteItems dataOrderApi={dataOrderApi} />
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
    paddingBottom: 24,
  },
});
