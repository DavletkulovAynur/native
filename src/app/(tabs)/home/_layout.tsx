import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="routes" options={{ headerShown: false }} />
      <Stack.Screen
        name="main/TravelSpots/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
