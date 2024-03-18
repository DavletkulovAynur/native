import { Dimensions, FlatList, StyleSheet, Text } from "react-native";
import Locality from "./Locality";
import { View } from "@/components/Themed";
import { FC } from "react";
import { TLocality } from "@/app/api/locality/types";

interface IProps {
  localities: TLocality[];
  isLoadingData: boolean;
  focus: string;
}
const Localities: FC<IProps> = ({ localities, isLoadingData, focus }) => {

  if (isLoadingData) {
    return (
      <View style={styles.load}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={localities}
      renderItem={({ item }) => <Locality item={item} focus={focus} />}
      keyExtractor={(item) => item.id}
      style={styles.list}
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
