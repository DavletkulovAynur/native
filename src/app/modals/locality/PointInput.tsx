import { TPoint } from "@/app/store/slices/types";
import { useTheme } from "@/app/theme";
import { FC, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IProps {
  point: TPoint | null;
  searchLocalities: (value: string) => void;
  setFocus: (value: string) => void;
  inputData: any;
  focus: boolean;
}
const PointInput: FC<IProps> = ({
  point,
  searchLocalities,
  setFocus,
  inputData,
  focus
}) => {
  const [value, setValue] = useState(point?.name || "");
  const {colors} = useTheme();

  const handleDepartureChange = (value: string) => {
    searchLocalities(value);
    setValue(value);
  };

  useEffect(() => {
    setValue(point?.name || "");
  }, [point]);

  const handleOnBlur = () => {
    setValue(point?.name || "");
  };

  const handleOnFocus = () => {
    searchLocalities("");
    setFocus(inputData.Focus);
  };

  return (
    <TextInput
      autoFocus={focus}
      style={[styles.input, { color: colors.text }]}
      value={value}
      placeholder={inputData.Placeholder}
      onChangeText={handleDepartureChange}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
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
