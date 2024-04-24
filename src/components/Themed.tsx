
import { Text as DefaultText, View as DefaultView } from "react-native";

import { useTheme } from "@/app/theme";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  background?: string; 
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();
  const color = colors.text;


  return (
    <DefaultText
      style={[{ color: color, fontFamily: "RobotoBlack" }, style]}
      {...otherProps}
    />
  );
}

//ВОЗМОЖНО стоит вынести
export function View(props: ViewProps) {
  const { style, background, ...otherProps } = props;
  const { colors } = useTheme();
  const baseBackground = colors.background;

  return <DefaultView style={[{ backgroundColor: background || baseBackground }, style]} {...otherProps} />;
}
