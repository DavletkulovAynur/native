import {
  FlatList,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import LocationInput from "./common";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@/app/theme";

const localities = [
  {
    id: 1,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 2,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 3,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 4,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 5,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 6,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 7,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 8,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 9,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 10,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 22,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
  {
    id: 33,
    name: "Юлдаш",
    phone: "+7 (929) 579-77-80",
  },
];
const Test = () => {
  return (
    <View style={[styles.wrapper, { backgroundColor: "#fff" }]}>
      <View>
        <Text style={styles.title}>РУБ 1400</Text>
        <Text style={styles.name}>Юлдаш</Text>

        <Text style={styles.phone}>89</Text>
      </View>
      <View>
        <FontAwesome name="telegram" size={32} color="black" />
      </View>
    </View>
  );
};
const Routes = () => {
  const { colors } = useTheme();
  //FIXME: бесконечный цикл
  // const getFormattedNumber = useMemo(() => useFormattedPhoneNumber(), []);
  const phoneNumber = "+7 (929) 579-77-80";

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.base }]}>
      <View style={[styles.container]}>
        <View style={styles.form}>
          <LocationInput iconName="chevron-left" />
        </View>
        <FlatList
          data={localities}
          renderItem={() => <Test />}
          keyExtractor={(item) => item.id}
          style={[styles.test]}
          ListFooterComponent={<View style={{ marginBottom: 260 }} />}
          // ListEmptyComponent={
          //   isLoadingData ? (
          //     <ActivityIndicator animating={true} />
          //   ) : (
          //     <Text>Ничего не найдено</Text>
          //   )
          // }
        />
      </View>
    </SafeAreaView>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    // padding: 12,
  },
  form: {
    padding: 12,
    borderRadius: 12,
    // marginTop: 60,
    backgroundColor: "#fff",
  },
  offers: {
    // marginTop: 20,
    // paddingVertical: 12,
    // borderRadius: 10,
    // flex: 1,
    bottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    color: "#5a6472",
    marginBottom: 16,
  },
  phone: {
    fontSize: 20,
  },
  wrapper: {
    margin: 10,
    padding: 20,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  test: {
    // marginBottom: 180,
    backgroundColor: "blue",
  },
});
