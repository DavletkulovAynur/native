import { StyleSheet } from "react-native";
import { Text } from "@/components/Themed";

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
    textAlign: "center",
    // fontFamily: "RobotoBlack",
  },
});
