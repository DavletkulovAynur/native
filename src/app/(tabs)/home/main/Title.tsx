import { StyleSheet, Text } from "react-native";

const Title = () => {
  return (
    <Text style={styles.title}>
      Ваши километры{"\n"}наше преданное внимание
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: "900",
    // color: "#000",
    textAlign: "center",
    // fontFamily: "RobotoBlack",
  },
});
