import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import TravelSpot from "./TravelSpot";
import { useTheme } from "@/app/theme";
import data from "./testData";

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
