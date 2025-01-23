"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/features/counter/counter-slice";

const Counter = () => {
  // Read data from the store
  const count = useSelector((state) => state.counter.value);
  //  Changing the data by sending action to the store
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
