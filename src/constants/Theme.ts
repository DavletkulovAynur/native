import {
  DarkTheme as Dark,
  DefaultTheme as Default,
} from "@react-navigation/native";

//
const DefaultTheme = {
  ...Default,
  roundness: 2,
  colors: {
    contrastText: "#ffffff",
    contrastDefaultText: "#e1e5e9",
    primary: "#89cffb",
    secondary: "#ff8f5c",
    base: "#ffffff",
    background: "#f7f7f7",
    separator: "#e1e5e9",
    text: "#191b1f",
    secondaryText: "#b0b6bf",
    error: "#ef5350",
    warning: "#ff9800",
    info: "#03a9f4",
    success: "#4caf50",
  },
};

const DarkTheme = {
  ...Dark,
  roundness: 2,
  colors: {
    primary: "#3c5a6b",
    background: "#141414",
    base: "#242528",
    text: "#ffffff",
    secondaryText: "#6b6f73",
    separator: "#e1e5e9",
    
    secondary: "#ff8f5c",
    contrastText: "#ffffff",

    contrastDefaultText: "#edeff3",
    
    
    
    error: "#c62828",
    warning: "#e65100",
    info: "#01579b",
    success: "#1b5e20",
  },
};

export { DefaultTheme, DarkTheme };
