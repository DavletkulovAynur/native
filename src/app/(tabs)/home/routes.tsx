import React, { FC } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import LocationInput from "./common";
import { useTheme } from "@/app/theme";
import { OrderApi } from "@/app/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { RouteItems } from "./routeComponents";
import { router } from "expo-router";
import { updatePointOfArrival } from "@/app/store/slices/localitySlice";

const RouteScreen: FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const params = {
    originId: pointOfDeparture?.id,
    destinationId: pointOfArrival?.id,
  };

  const dataOrderApi = OrderApi.useGetOrdersQuery(params);

  const goBackToMainPage = () => {
    if (pointOfArrival) {
      dispatch(updatePointOfArrival(null));
      router.back();
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.base }]}>
      <View
        style={[styles.innerContainer, { backgroundColor: colors.background }]}
      >
        <View style={[styles.form, { backgroundColor: colors.base }]}>
          <LocationInput
            iconName="chevron-left"
            actionFunction={goBackToMainPage}
          />
        </View>
        {dataOrderApi.isLoading || dataOrderApi.isFetching ? null : (
          <RouteItems dataOrderApi={dataOrderApi} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  form: {
    padding: 12,
    borderRadius: 12,
    paddingBottom: 24,
  },
});
