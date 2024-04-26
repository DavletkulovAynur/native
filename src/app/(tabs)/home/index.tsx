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

const MainScreen = () => {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Perform actual data refreshing operations here
    console.log("onRefresh");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
    >
      <Main />
      <ScrollView
        style={[styles.content, { backgroundColor: colors.background }]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TravelSpots />
        <TopEvent />
        <View style={styles.test} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  test: {
    height: 50,
  },
});
