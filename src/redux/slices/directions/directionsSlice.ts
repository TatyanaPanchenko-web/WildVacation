import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { DirectionsElementType, DirectionsSliceState, Params } from "./types";

export const fetchAddDirections = createAsyncThunk(
  "directions/fetchDirectionsArr",
  async ({
    limitDirections,
    searchWhere,
    searchDuration,
    searchType,
  }: Params) => {
    const result = await fetch(
      `https://685ac4e69f6ef9611157b5f7.mockapi.io/directions?page=1&limit=${
        limitDirections ? limitDirections : ""
      }&directions=${searchWhere ? searchWhere : ""}&duration=${
        searchDuration ? searchDuration : ""
      }&type=${searchType ? searchType : ""}`
    );
    return (await result.json()) as DirectionsElementType[];
  }
);
const initialState: DirectionsSliceState = {
  directions: [],
  limitDirections: 3,
  search: {
    searchWhere: "",
    searchDuration: "",
    searchType: "",
  },
  statusDirections: "loading", //success, error
};

export const directionsSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    setDisplayMoreDirections: (state) => {
      state.limitDirections += 3;
    },
    setSearchValueWhere: (state, action: PayloadAction<string>) => {
      state.search = { ...state.search, searchWhere: action.payload };
      // return { ...state.search, searchWhere: action.payload };
    },
    setSearchValueDuration: (state, action: PayloadAction<string>) => {
      state.search = { ...state.search, searchDuration: action.payload };
    },
    setSearchValueType: (state, action: PayloadAction<string>) => {
      state.search = { ...state.search, searchType: action.payload };
    },
    clearSearchValue: (state) => {
      state.search = {
        searchWhere: "",
        searchDuration: "",
        searchType: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddDirections.pending, (state) => {
      state.directions = [];
      state.statusDirections = "loading";
    });
    builder.addCase(
      fetchAddDirections.fulfilled,
      (state, action: PayloadAction<DirectionsElementType[]>) => {
        state.directions = action.payload;
        state.statusDirections = "success";
      }
    );
    builder.addCase(fetchAddDirections.rejected, (state) => {
      state.directions = [];
      state.statusDirections = "error";
    });
  },
});
export const selectDirections = (state: RootState) => state.directions;
export const selectSearchValues = (state: RootState) => state.directions.search;
export const {
  setDisplayMoreDirections,
  setSearchValueWhere,
  setSearchValueDuration,
  setSearchValueType,
  clearSearchValue,
} = directionsSlice.actions;
export default directionsSlice.reducer;
