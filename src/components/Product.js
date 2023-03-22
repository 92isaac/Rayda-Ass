import React from "react";
import { useGetAllProductsQuery } from "./apiSlice";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { ProductCard } from "./ProductCard";

// Component to display the product data fetched from API
export const Product = () => {
  // Fetch product data using useGetAllProductsQuery from apiSlice
  const {
    data: allProductsData, // Product data fetched from API
    error, // Error returned from API
    isError, // Flag indicating if there was an error while fetching data
    isLoading, // Flag indicating if the data is being fetched from API
  } = useGetAllProductsQuery();

  console.log(allProductsData);

  // If data is still being fetched from API, display a loading component
  if (isLoading) return <Loading />;

  return (
    <>
      {/* Display all products fetched from API using ProductCard */}
      {Array.isArray(allProductsData?.data) &&
        allProductsData?.data?.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}

      {/* If there is an error while fetching the data, display an error component */}
      {
        isError ? (<ErrorPage message={error?.message}/>) : null
      }
    </>
  );
};
