import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;