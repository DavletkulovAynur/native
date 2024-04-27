import React, { FC } from "react";
import { ImageBackground, Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useTheme } from "@/app/theme";
import eventImage from "@assets/images/test/event.jpeg";

const Event: FC = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground source={eventImage} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.content}>
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
  content: {
    backgroundColor: "transparent",
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
    padding: 12,
    borderRadius: 24,
    width: 160,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Event;
