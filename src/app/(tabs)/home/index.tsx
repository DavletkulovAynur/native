import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import Main from "./main";
import { useTheme } from "@/app/theme";
import { TravelSpots } from "./main/TravelSpots";
import { TopEvent } from "./main/TopEvent";
import { View } from "@/components/Themed";

export default function One() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log("super");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
    >
      <Main />
      <ScrollView
        style={[styles.content]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TravelSpots />
        <TopEvent />
        <View style={[styles.test]}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  test: {
    height: 50,
  },
});
