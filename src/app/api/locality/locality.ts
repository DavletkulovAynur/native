import BaseApi from "../baseApi";
import { TLocality } from "./types";
import Toast from "react-native-toast-message";

const LocalityApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocalities: builder.query<TLocality[], any>({
      query: (params) => {
        return {
          url: "/localities",
          method: "GET",
          params,
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        await queryFulfilled;
        try {
        } catch (error: any) {
          Toast.show({
            type: "error",
            text1: "Ошибка",
            text2:
              error?.defaultText ||
              "Что-то пошло не так. Пожалуйста, повторите свои действия позже.",
            position: "bottom",
          });
        }
      },
    }),
  }),
});

//

export default LocalityApi;
