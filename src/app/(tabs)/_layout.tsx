import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRootNavigationState } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useTheme } from "@/app/theme";
import { router } from "expo-router";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colors } = useTheme();
  const isNavigationReady = useIsNavigationReady();

  const { pointOfArrival } = useSelector((state: RootState) => state.locality);

  //FIXME:
  useEffect(() => {
    if (pointOfArrival) {
      if (isNavigationReady) {
        router.back();
        router.navigate({
          pathname: "home/route",
        } as any);
      }
    }
  }, [pointOfArrival]);

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

function useIsNavigationReady() {
  const rootNavigationState = useRootNavigationState();
  return rootNavigationState?.key != null;
}
