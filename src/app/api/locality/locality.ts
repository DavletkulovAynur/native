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
          console.log("error", error);
        }
      },
    }),
  }),
});

//

export default LocalityApi;
