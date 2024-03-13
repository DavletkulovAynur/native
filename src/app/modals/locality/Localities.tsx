import { Dimensions, FlatList, StyleSheet, Text } from "react-native";
import { LocalityApi } from "@/app/api";
import Locality from "./Locality";
import { View } from "@/components/Themed";
import { useState } from "react";
type ItemProps = { title: string; id: string };

const windowWidth = Dimensions.get("window").width;

const Localities = ({ localities, isLoading, isFetching }: any) => {
  const test = (id: string) => {
    console.log("test", id);
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  item: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#5a6472",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    overflow: "hidden",
    width: windowWidth - 20,
  },
  inputContainer: {
    marginLeft: 10,
    width: windowWidth - 12,
    backgroundColor: "#fff",
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
  input: {
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});
