import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import Main from "./main";
import { View } from "@/components/Themed";
import { useTheme } from "@/app/theme";

export default function One() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log("super");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        style={[]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    height: "100%",
    flexGrow: 1,
  },
});
