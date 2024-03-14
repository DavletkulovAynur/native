import { View } from "@/components/Themed";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Locality = ({ item, test }: any) => {
  const { id, name, district } = item;
  console.log("id", id);
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
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
});
