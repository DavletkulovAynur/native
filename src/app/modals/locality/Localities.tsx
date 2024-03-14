import { Dimensions, FlatList, StyleSheet, Text } from "react-native";
import Locality from "./Locality";
import { View } from "@/components/Themed";
import { useDispatch } from "react-redux";
import { updatePointOfDeparture } from "@/app/store/slices/localitySlice";
type ItemProps = { title: string; id: string };

interface IProps {
  localities: any[];
  isLoading: boolean;
  isFetching: boolean;
}
const Localities = ({ localities, isLoading, isFetching }: any) => {
  const dispatch = useDispatch();

  const test = (id: string) => {
    dispatch(
      updatePointOfDeparture({
        name: "text",
        id: "1",
      })
    );
  };

  if (isLoading || isFetching) {
    return (
      <View style={styles.load}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={localities as ItemProps[]}
      renderItem={({ item }) => (
        <Locality test={test} item={item} isLoading={isLoading} />
      )}
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
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});
