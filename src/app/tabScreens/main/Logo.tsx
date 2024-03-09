import { View } from "@/components/Themed";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import logo from "@assets/images/logo.png";

const Logo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image style={styles.logo} source={logo as ImageSourcePropType} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: -40,
    marginBottom: 10,
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
  },
});
