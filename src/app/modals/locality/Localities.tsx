import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import Locality from "./Locality";
import { View } from "@/components/Themed";
import { FC } from "react";
import { TLocality } from "@/app/api/locality/types";
import { useTheme } from "@/app/theme";


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
      <View style={styles.list}>
        <Text>Failed to fetch data from server. Please try again later.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={localities}
      renderItem={({ item }) => <Locality item={item} focus={focus} />}
      keyExtractor={(item) => item.id}
      style={[styles.list, { backgroundColor: colors.base }]}
      ListEmptyComponent={
        isLoadingData ? (
          <ActivityIndicator animating={true} />
        ) : (
          <Text>Ничего не найдено</Text>
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
});
