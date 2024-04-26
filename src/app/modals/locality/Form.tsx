import { FC } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { RootState } from "@/app/store/store";
import { useTheme } from "@/app/theme";
import { View } from "@/components/Themed";
import useDebounce from "@/hooks/useDebounce";
import PointInput from "./PointInput";
import { FOCUS_INPUT } from "./types";

interface IProps {
  setSearch: (value: string) => void;
  setFocus: (value: string) => void;
  focus: string;
}

const Form: FC<IProps> = ({ setSearch, setFocus, focus }) => {
  const { colors } = useTheme();
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality || { pointOfArrival: "", pointOfDeparture: "" }
  );

  const searchLocalities = useDebounce((value: string) => {
    setSearch(value);
  }, 500);

  return (
    <View style={[styles.form, { backgroundColor: colors.base }]}>
      <View>
        <AntDesign name="enviroment" size={28} color={colors.text} backgroundColor="transparent"/>
      </View>

      <View style={[styles.inputContainer, { backgroundColor: colors.base }]}>
        <PointInput
          point={pointOfDeparture}
          searchLocalities={searchLocalities}
          inputData={DEPARTURE_INPUT}
          setFocus={setFocus}
          focus={focus === FOCUS_INPUT.DEPARTURE}
        />
        <View style={[styles.separator, { backgroundColor: colors.separator }]} />
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

const windowWidth = Dimensions.get("window").width;


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
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "100%",
  },
});
