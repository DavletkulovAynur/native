import { TPoint } from "@/app/store/slices/types";
import { FC, useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IProps {
  point: TPoint | null;
  searchLocalities: (value: string) => void;
  placeholder: string;
}
const PointInput: FC<IProps> = ({ point, searchLocalities, placeholder }) => {
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

  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={handleDepartureChange}
      onBlur={handleOnBlur}
      onFocus={() => searchLocalities("")}
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
