import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  Text,
  FlatList,
  View,
} from "react-native";
import Main from "./main";
import { useTheme } from "@/app/theme";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
];

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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true} // Горизонтальный скролл
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const renderItem = ({ item }: any) => (
  <View style={{ width: 100, height: 100, backgroundColor: "gray", margin: 5 }}>
    <Text>{item.title}</Text>
  </View>
);

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
