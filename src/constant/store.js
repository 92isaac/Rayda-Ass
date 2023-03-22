import { configureStore  } from "@reduxjs/toolkit";
import { productsApi } from "../components/apiSlice";

// create a store with Redux Toolkit's configureStore function
export const store = configureStore({
  // specify the reducer for the store
  reducer: {
    // add the reducer from the productsApi slice to the store
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // specify the middleware for the store
  middleware: (getDefaultMiddleware) =>
    // use the getDefaultMiddleware function to get the default middleware,
    // and then concatenate the middleware from the productsApi slice
    getDefaultMiddleware().concat(productsApi.middleware),
});
