import React, { FC } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { View, Text } from "@/components/Themed";
import { TLocality } from "@/app/api/locality/types";
import { useTheme } from "@/app/theme";
import Locality from "./Locality";

interface IProps {
  localities: TLocality[];
  isLoadingData: boolean;
  focus: string;
  isError: boolean;
}

const Localities: FC<IProps> = ({
  localities,
  isLoadingData,
  focus,
  isError,
}) => {
  const { colors } = useTheme();

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to fetch data from server. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={localities}
      renderItem={({ item }) => <Locality item={item} focus={focus} />}
      keyExtractor={(item) => item.id.toString()}
      style={[styles.list, { backgroundColor: colors.base }]}
      ListEmptyComponent={
        isLoadingData ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <Text style={styles.emptyText}>Nothing found</Text>
        )
      }
    />
  );
};

export default Localities;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
