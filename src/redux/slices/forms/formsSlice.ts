import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FormSliceType,
  FormsOrderElementType,
  FormsCalllementType,
} from "./types";
import { RootState } from "../../store";

const initialState: FormSliceType = {
  orders: [],
  calls: [],
};
const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setDataOrders: (state, action: PayloadAction<FormsOrderElementType>) => {
      state.orders.push(action.payload);
    },
    setDataCalls: (state, action: PayloadAction<FormsCalllementType>) => {
      console.log(action);
      state.calls.push(action.payload);
    },
  },
});

export const selectForms = (state: RootState) => state.forms;

export const { setDataOrders, setDataCalls } = formSlice.actions;
export default formSlice.reducer;
