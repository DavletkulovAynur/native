import BaseApi from "../baseApi";

const LocalityApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocalities: builder.query<unknown, any>({
      query: (params) => {
        return {
          url: "/localities",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

//

export default LocalityApi;
