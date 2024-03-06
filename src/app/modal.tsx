import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const paddingValue = 20; // Adjust this based on your padding

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <FontAwesome
            name="search"
            size={24}
            color="black"
            backgroundColor="#fff"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />

          <View style={styles.separator} />

          <TextInput style={styles.input} />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    overflow: "hidden",
    width: windowWidth - 20,
  },
  inputContainer: {
    marginLeft: 10,
    width: windowWidth - 12,
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    // marginVertical: 15,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
  input: {
    height: 60,
    // margin: 12,
    borderWidth: 0,
    // paddingTop: 30,
    // paddingBottom: 30,
    backgroundColor: "#fff",
  },
});
