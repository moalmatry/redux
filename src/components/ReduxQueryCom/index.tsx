/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useAddNewProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/services/dummyData";
import React from "react";

const ReduxQueryCom = () => {
  const { isLoading: isLoadingAllData, data: allData } = useGetAllProductsQuery(
    {}
  );
  const { data: productById, isLoading: isLoadingProductById } =
    useGetProductByIdQuery(2);
  const [addProduct, { isLoading, isSuccess, data }] =
    useAddNewProductMutation();
  // console.log(isLoadingAllData);
  // console.log(allData);
  // console.log(isLoadingAllData);

  // console.log(productById);

  console.log(data);
  return (
    <div>
      <h1>All Products</h1>
      <button
        onClick={() =>
          addProduct({
            id: 300,
            title: "new product 2 ",
            description: "Hello World",
          })
        }
      >
        Add new Product
      </button>
    </div>
  );
};

export default ReduxQueryCom;
