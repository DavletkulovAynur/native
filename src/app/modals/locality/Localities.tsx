import { FlatList, StyleSheet, Text } from "react-native";
import Locality from "./Locality";
import { View } from "@/components/Themed";
import { FC } from "react";
import { TLocality } from "@/app/api/locality/types";

interface IProps {
  localities: TLocality[];
  isLoadingData: boolean;
  focus: string;
  isError: boolean
}
const Localities: FC<IProps> = ({ localities, isLoadingData, focus, isError }) => {
  if (isLoadingData) {
    return (
      <View style={styles.load}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <Text>Failed to fetch data from server. Please try again later.</Text>
    );
  }

  return (
    <FlatList
      data={localities}
      renderItem={({ item }) => <Locality item={item} focus={focus} />}
      keyExtractor={(item) => item.id}
      style={styles.list}
      ListEmptyComponent={<Text>No items found!</Text>}
    />
  );
};

export default Localities;

const styles = StyleSheet.create({
  load: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  list: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});
