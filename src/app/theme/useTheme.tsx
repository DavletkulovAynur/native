import React from "react";
import ThemeContext from "./ThemeContext";

const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};

export default useTheme;
