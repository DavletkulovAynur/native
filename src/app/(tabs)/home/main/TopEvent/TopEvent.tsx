import { Text, View } from "@/components/Themed";
import React from "react";
import {
  Button,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import eventImage from "@assets/images/test/event.jpg";
import { useTheme } from "@/app/theme";

const TopEvent = () => {
  const { colors } = useTheme();

  const onPress = () => {
    console.log("onPress");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={eventImage as ImageSourcePropType}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={[{ backgroundColor: 'transparent' }]}>
          <Text style={[styles.title, { color: colors.contrastText }]}>
            Лунные прогулки
          </Text>
          <Text
            style={[styles.description, { color: colors.contrastDefaultText }]}
          >
            Под лунным светом: Ночные конные прогулки в загадочном мире
          </Text>
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: colors.background }]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Подробнее</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
    height: 260,
    marginHorizontal: 10,
    borderRadius: 24,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    padding: 24,
    paddingBottom: 36,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 24,

    width: 160,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default TopEvent;
