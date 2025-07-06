import { configureStore } from "@reduxjs/toolkit";
import directionsReducer from "./slices/directions/directionsSlice";
import blogItemsReducer from "./slices/blogItems/blogItemsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    directions: directionsReducer,
    blogItems: blogItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
