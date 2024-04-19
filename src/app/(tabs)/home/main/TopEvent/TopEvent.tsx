import { Text, View } from "@/components/Themed";
import React from "react";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import eventImage from "@assets/images/test/event.jpg";

const TopEvent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={eventImage as ImageSourcePropType}
        style={styles.background}
      >
        <Text style={[styles.title, { color: "white" }]}>Лунные прогулки</Text>
        <Text style={[styles.description, { color: "white" }]}>
          Под лунным светом: Ночные конные прогулки в загадочном мире
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10, // Отступы по горизонтали
    overflow: "hidden",
    borderRadius: 24,
  },
  background: {
    width: "100%",
    height: 240,
    // flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 20,
  },
});

export default TopEvent;
