import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";
import personReducer from "./features/person/person-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
