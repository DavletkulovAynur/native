import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export default function One() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Text style={styles.title}>Cheap flight and airline tickets</Text>
        <View style={styles.parent}>
          <View style={styles.form}>
            <View>
              <FontAwesome name="search" size={24} color="black" />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.point}>Откуда</Text>
              <View style={styles.separator} />
              <Text style={styles.point}>Куда</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  test: {
    padding: 12,
    backgroundColor: "#0db1b2",
  },
  title: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: "bold",
    //FIXME:
    color: "#fff",
    textAlign: "center",
  },
  parent: {
    marginTop: 10,

    borderRadius: 20,
    padding: 12,
    width: "100%",
    position: "relative",
    top: 40,
    backgroundColor: "#fff",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "#eef1f4",
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    padding: 12,
    overflow: "hidden",
  },
  inputContainer: {
    marginLeft: 10,
    width: "100%",
  },
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
});
