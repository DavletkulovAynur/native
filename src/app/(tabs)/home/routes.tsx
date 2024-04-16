import {
  FlatList,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { StyleSheet } from "react-native";
import LocationInput from "./common";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@/app/theme";
import { OrderApi } from "@/app/api";
import { FC } from "react";

//ПРОБЛЕМЫ: почему item.item
const Test: FC<any> = ({ item }) => {
  if (!item) {
    console.log("what!!!");
  }
  return (
    <View style={[styles.wrapper, { backgroundColor: "#fff" }]}>
      <View>
        <Text style={styles.title}>{item.price}</Text>
        <Text style={styles.name}>{item.agency?.name}</Text>

        <Text style={styles.phone}>{item.agency?.phones[0]}</Text>
      </View>
      <View>
        <FontAwesome name="telegram" size={32} color="black" />
      </View>
    </View>
  );
};
const Routes = () => {
  const params = {
    originId: 1,
    destinationId: 2,
  };
  const { data, isLoading } = OrderApi.useGetOrdersQuery(params);
  console.log("data", data);
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
          data={data}
          renderItem={(item) => <Test item={item.item} />}
          keyExtractor={(item) => item.id}
          style={[{ backgroundColor: colors.background }]}
          ListFooterComponent={<View style={{ marginBottom: 260 }} />}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text>Ничего не найдено</Text>
            )
          }
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
    bottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    // color: "#5a6472",
    marginBottom: 16,
  },
  phone: {
    fontSize: 20,
  },
  wrapper: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
