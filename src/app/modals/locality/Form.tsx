import { RootState } from "@/app/store/store";
import useDebounce from "@/hooks/useDebounce";
import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import PointInput from "./PointInput";

const windowWidth = Dimensions.get("window").width;

interface IProps {
  setSearch: (value: string) => void;
}

const Form: FC<IProps> = ({ setSearch }) => {
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );

  const searchLocalities = useDebounce((value) => {
    setSearch(value);
  }, 500);

  return (
    <View style={styles.form}>
      <View>
        <AntDesign
          name="enviroment"
          size={28}
          color="black"
          backgroundColor="#fff"
        />
      </View>

      <View style={styles.inputContainer}>
        <PointInput
          point={pointOfDeparture}
          searchLocalities={searchLocalities}
          placeholder="Откуда"
        />
        <View style={styles.separator} />
        <PointInput
          point={pointOfArrival}
          searchLocalities={searchLocalities}
          placeholder="Куда"
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    overflow: "hidden",
    width: windowWidth - 20,
  },
  inputContainer: {
    marginLeft: 10,
    width: windowWidth - 12,
    backgroundColor: "#fff",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
});
