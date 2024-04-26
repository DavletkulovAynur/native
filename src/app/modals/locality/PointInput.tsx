import React, { FC, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TPoint } from "@/app/store/slices/types";
import { useTheme } from "@/app/theme";

interface IProps {
  point: TPoint | null;
  searchLocalities: (value: string) => void;
  setFocus: (value: string) => void;
  inputData: { Placeholder: string; Focus: string };
  focus: boolean;
}

const PointInput: FC<IProps> = ({
  point,
  searchLocalities,
  setFocus,
  inputData,
  focus,
}) => {
  const [value, setValue] = useState(point?.name || "");
  const { colors } = useTheme();

  const handleChange = (value: string) => {
    searchLocalities(value);
    setValue(value);
  };

  useEffect(() => {
    setValue(point?.name || "");
  }, [point]);

  const handleBlur = () => {
    setValue(point?.name || "");
  };

  const handleFocus = () => {
    searchLocalities("");
    setFocus(inputData.Focus);
  };

  return (
    <TextInput
      autoFocus={focus}
      style={[styles.input, { color: colors.text }]}
      value={value}
      placeholder={inputData.Placeholder}
      onChangeText={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
};

export default PointInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderWidth: 0,
  },
});
