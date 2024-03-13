import { updatePointOfDeparture } from "@/app/store/slices/localitySlice";
import { RootState } from "@/app/store/store";
import useDebounce from "@/hooks/useDebounce";
import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

const Form: FC<any> = ({ destinationValue, setSearch }) => {
  const { pointOfArrival, pointOfDeparture } = useSelector(
    (state: RootState) => state.locality
  );
  const dispatch = useDispatch();

  const [departureInput, setDepartureInput] = useState(
    pointOfDeparture?.name || ""
  );

  const handleChange = useDebounce((value) => {
    setSearch(value);
  }, 1000);

  const handleDepartureChange = (value: string) => {
    handleChange(value);
    setDepartureInput(value);
    // setSearch(value);
    dispatch(
      updatePointOfDeparture({
        name: "text",
        id: "1",
      })
    );
  };

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
        <TextInput
          style={styles.input}
          value={departureInput}
          placeholder="Откуда"
          onChangeText={handleDepartureChange} // Обработчик изменения текста
        />

        <View style={styles.separator} />

        <TextInput style={styles.input} autoFocus placeholder="Куда" />
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
  point: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "100%",
    backgroundColor: "#e1e5e9",
  },
  input: {
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});
