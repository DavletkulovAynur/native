import { MonoText } from "@/components/StyledText";
import { StyleSheet, Text } from "react-native";

const Title = () => {
  return <Text style={styles.title}>Ваши километры{"\n"}наше преданное внимание</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    fontFamily: "RobotoBlack",
  },
});
