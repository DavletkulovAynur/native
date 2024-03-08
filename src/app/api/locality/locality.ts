import BaseApi from "../baseApi";

const LocalityApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocalities: builder.query<unknown, void>({
      query: () => {
        return {
          url: "/todos",
          method: "GET",
        };
      },
    }),
  }),
});

//

export default LocalityApi;
