import { TPoint } from "@/app/store/slices/types";
import { FC, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IProps {
  point: TPoint | null;
  searchLocalities: (value: string) => void;
  setFocus: (value: string) => void;
  inputData: any
}
const PointInput: FC<IProps> = ({ point, searchLocalities, setFocus, inputData }) => {
  const [value, setValue] = useState(point?.name || "");

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
    searchLocalities("")
    setFocus(inputData.Focus);
  };

  return (
    <TextInput
      autoFocus
      style={styles.input}
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
    backgroundColor: "#fff",
  },
});
