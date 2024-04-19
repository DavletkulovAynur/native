import { RootState } from "@/app/store/store";
import useDebounce from "@/hooks/useDebounce";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import PointInput from "./PointInput";
import { FOCUS_INPUT } from "./types";

const windowWidth = Dimensions.get("window").width;

interface IProps {
  setSearch: (value: string) => void;
  setFocus: (value: string) => void;
  focus: string;
}

const Form: FC<IProps> = ({ setSearch, setFocus, focus }) => {
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
          inputData={DEPARTURE_INPUT}
          setFocus={setFocus}
          focus={focus === FOCUS_INPUT.DEPARTURE}
        />
        <View style={styles.separator} />
        <PointInput
          point={pointOfArrival}
          searchLocalities={searchLocalities}
          inputData={ARRIVAL_INPUT}
          setFocus={setFocus}
          focus={focus === FOCUS_INPUT.ARRIVAL}
        />
      </View>
    </View>
  );
};

export default Form;

const DEPARTURE_INPUT = {
  Placeholder: "Откуда",
  Focus: FOCUS_INPUT.DEPARTURE,
};

const ARRIVAL_INPUT = {
  Placeholder: "Куда",
  Focus: FOCUS_INPUT.ARRIVAL,
};

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
