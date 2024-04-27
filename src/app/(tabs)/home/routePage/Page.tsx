import React, { FC, useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import LocationInput from "@/app/(tabs)/home/common/LocationInput";
import { useTheme } from "@/app/theme";
import { OrderApi } from "@/app/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import RouteItems from "./RouteItems";
import { router } from "expo-router";
import { updatePointOfArrival } from "@/app/store/slices/localitySlice";

const Page: FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const params = {
    originId: pointOfDeparture?.id,
    destinationId: pointOfArrival?.id,
  };

  useEffect(() => {
    return () => {
      dispatch(updatePointOfArrival(null));
    };
  }, []);

  const dataOrderApi = OrderApi.useGetOrdersQuery(params);

  const goBackToMainPage = () => {
    if (pointOfArrival) {
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

export default Page;

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
