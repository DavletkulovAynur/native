import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { LocalityApi } from "./api";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

type ItemProps = { title: string; id: string };

const Item = ({ title, test, id }: any) => (
  <Pressable onPress={() => test(id)}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Хайбуллинский</Text>
      <View style={styles.separator} />
    </View>
  </Pressable>
);

export default function LocalityScreen() {
  const [destinationValue, setDestinationValue] = useState("Уфа");
  const { data, isLoading } = LocalityApi.useGetLocalitiesQuery();

  const test = (id: string) => {
    console.log("test", id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <AntDesign
            name="enviroment"
            size={28}
            color="black"
            backgroundColor="#fff"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={destinationValue} />

          <View style={styles.separator} />

          <TextInput style={styles.input} autoFocus placeholder="Куда" />
        </View>
      </View>
      <FlatList
        data={data as ItemProps[]}
        renderItem={({ item }) => (
          <Item test={test} title={item.title} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    // height: 60,
    // margin: 12,
    fontSize: 16,
    // fontWeight: "bold",
    borderWidth: 0,
    // paddingTop: 30,
    // paddingBottom: 30,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});
