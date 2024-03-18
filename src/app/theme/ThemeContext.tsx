import { DefaultTheme } from "@/constants";
import React from "react";
import { Theme } from "./types";

const ThemeContext = React.createContext<Theme>(DefaultTheme);

export default ThemeContext;
