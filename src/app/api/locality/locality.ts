import BaseApi from "../baseApi";
import { TLocality } from "./types";

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
        } catch (error) {
          //TODO: add notification
        }
      },
    }),
  }),
});

//

export default LocalityApi;
