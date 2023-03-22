import React from "react";
import { useGetAllProductsQuery } from "./apiSlice";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { ProductCard } from "./ProductCard";

export const Product = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();

  console.log(allProductsData);
  if (isLoading) return <Loading />;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {Array.isArray(allProductsData?.data) &&
            allProductsData?.data?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </>
      )}

      {
        isError ? (<ErrorPage message={error?.message}/>) : null
      }
    </>
  );
};
