import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONSTANTS } from "@/constants";

const BaseApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: CONSTANTS.devBaseUrl,
  }),
  endpoints: () => ({}),
});

export default BaseApi;
