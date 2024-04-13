import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  Text,
} from "react-native";
import Main from "./main";
import { useTheme } from "@/app/theme";

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
        {/* <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.title}>Content</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // height: "100%",
    flex: 1,
    backgroundColor: "#f7f7f7",
    // flexGrow: 1,
  },
  title: {
    margin: 100,
  },
});
