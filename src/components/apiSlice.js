import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an instance of an API using the createApi function
export const productsApi = createApi({
  // Defining the name for the reducer path
  reducerPath: "productsApi",
  // Creating a baseQuery for the API with the baseUrl provided
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  // Defining an endpoint called getAllProducts with a query
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // Setting the query to return a specific product ID
      query: () => "7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

// Exporting the getAllProductsQuery function from the productsApi object
export const { useGetAllProductsQuery } = productsApi;
