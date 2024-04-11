import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import { useColorScheme } from "@/components/useColorScheme";
import { DarkTheme, DefaultTheme } from "@/constants";
import { ThemeContext } from "./theme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    RobotoBlack: require("../../assets/fonts/Roboto-Black.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  //FIXME:  как то нужно передавать backgroundColor
  return (
    <Provider store={store}>
      {/* TODO: тут определяем тему */}
      <ThemeContext.Provider
        value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "#f7f7f7" },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="locality"
            options={{ presentation: "modal", headerShown: false }}
          />
        </Stack>
      </ThemeContext.Provider>
    </Provider>
  );
}
