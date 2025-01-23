"use client";
import { decrement, increment } from "@/store/features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

const Counter = () => {
  // Read data from the store
  //   const count = useSelector((state) => state.counter.value);
  const count = useAppSelector((state) => state.counter.value);
  //  Changing the data by sending action to the store
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
