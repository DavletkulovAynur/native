import { Text, View } from "@/components/Themed";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function One() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View>
      <View style={styles.parent}>
        <View style={styles.container}>
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          /> */}
          <Text>Откуда</Text>
          <Text>Куда</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#6e796e",
  },
  container: {
    borderRadius: 8,
    padding: 12,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
});
