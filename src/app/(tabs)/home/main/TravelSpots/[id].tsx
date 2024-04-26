import React, { FC } from "react";
import { View, Text } from "@/components/Themed";
import { router, useLocalSearchParams } from "expo-router";
import data from "./testData";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useTheme } from "@/app/theme";
import { FontAwesome } from "@expo/vector-icons";

const TravelSpotPage: FC = () => {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = data.find((i) => i.id === id);

  const handlePress = () => {
    router.back();
  };
  return (
    <View style={[{ backgroundColor: colors.background }]}>
      <ImageBackground style={styles.bgContainer} source={item?.cover}>
        <Pressable onPress={handlePress}>
          <View style={styles.iconContainer}>
            <FontAwesome name={"arrow-left"} size={24} color={colors.text} />
          </View>
        </Pressable>
      </ImageBackground>
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <Text style={styles.title}>{item?.title}</Text>
      </ScrollView>
    </View>
  );
};

export default TravelSpotPage;

const styles = StyleSheet.create({
  bgContainer: {
    height: 260,
  },
  title: {
    fontSize: 32,
  },
  container: {
    padding: 20,
    height: "100%",
  },
  iconContainer: {
    backgroundColor: "white",
    width: 50, // Ширина контейнера
    height: 50, // Высота контейнера
    marginTop: 60,
    marginLeft: 20,
    padding: 10,
    borderRadius: 25,
    overflow: "hidden",
    display: "flex", // Установка контейнера в режим flex
    justifyContent: "center", // Горизонтальное центрирование
    alignItems: "center", // Вертикальное центрирование
  },
});
