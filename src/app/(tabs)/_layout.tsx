import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/app/theme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  //МОЖЕМ ТУТ УПРАВЛЯТЬ
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );
  useEffect(() => {
    if (pointOfArrival) {
      navigation.goBack();
      navigation.navigate("routes" as never);
    }
  }, [pointOfArrival]);

  console.log("colorScheme", colorScheme);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.base,
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Поездки",
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
