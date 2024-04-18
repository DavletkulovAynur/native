import React, { FC } from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

interface IProps {
  text?: string;
}
const ErrorBlock: FC<IProps> = ({ text = defaultText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const defaultText =
  "Что-то пошло не так. Пожалуйста, повторите свои действия позже.";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default ErrorBlock;
