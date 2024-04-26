import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import TravelSpot from "./TravelSpot";
import { useTheme } from "@/app/theme";

import sp1 from "@assets/images/test/sp1.jpeg";
import sp2 from "@assets/images/test/sp2.jpeg";
import sp3 from "@assets/images/test/sp3.jpeg";
import sp4 from "@assets/images/test/sp4.jpg";
import sp5 from "@assets/images/test/sp5.jpeg";

const data = [
  { id: "1", title: "Нугуш", cover: sp1 },
  { id: "2", title: "Национальный парк «Башкирия»", cover: sp2 },
  { id: "3", title: "Баймак", cover: sp3 },
  { id: "4", title: "Сакмар", cover: sp4 },
  { id: "5", title: "Айгир", cover: sp5 },
];

const TravelSpots = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.base }]}>
      <View style={[styles.header, { backgroundColor: colors.base }]}>
        <Text style={styles.title}>Интересные места</Text>
        <Text style={[styles.subTitle, { color: colors.secondaryText }]}>
          Башкортостан
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <TravelSpot item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true} // Горизонтальный скролл
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TravelSpots;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 30,
  },
  header: {
    marginLeft: 20,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 16,
  },
});
