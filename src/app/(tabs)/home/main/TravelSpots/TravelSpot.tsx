import { Text } from "@/components/Themed";
import React, { FC } from "react";
import { View, StyleSheet, Image } from "react-native";

const TravelSpot: FC<any> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.cover} style={styles.background} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};

export default TravelSpot;

const styles = StyleSheet.create({
  container: {
    width: 140, // Ширина контейнера
    margin: 10,
  },
  background: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
  },
});
