import { Button, StyleSheet } from "react-native";
// import Toast from "react-native-root-toast";

// import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components";


export default function Setting() {
  const onPressLearnMore = () => {
    console.log("onPressLearnMore");
    Toast.show({
      type: "error",
      text1: "Ошибка",
      text2:
        "Что-то пошло не так. Пожалуйста, повторите свои действия позже.",
      position: "bottom",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Toast config={toastConfig} />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
