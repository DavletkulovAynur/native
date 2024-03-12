import { View } from "@/components/Themed";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Locality = ({ item }: any) => {
  const { id, name, district } = item;
  return (
    <Pressable onPress={() => test(id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{district}</Text>
        <View style={styles.separator} />
      </View>
    </Pressable>
  );
};

export default Locality;

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
