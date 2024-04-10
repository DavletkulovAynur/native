import { View, StyleSheet} from "react-native";



const Separator = () => {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    // marginVertical: 15,
    // marginVertical: 55,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
})

export default Separator