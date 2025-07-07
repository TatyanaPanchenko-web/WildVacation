import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { BlogElementType, BlogItemsSliceState } from "./types";

export const fetchAddBlogItems = createAsyncThunk(
  "blogItems/fetchBlogItemsArr",
  async (limitBlogItems?: number) => {
    const result = await fetch(
      `https://685ac4e69f6ef9611157b5f7.mockapi.io/blogItems?page=1&limit=${
        limitBlogItems ? limitBlogItems : ""
      }`
    );
    return (await result.json()) as BlogElementType[];
  }
);
const initialState: BlogItemsSliceState = {
  blogItems: [],
  limitBlogItems: 3,
  statusBlogItems: "loading", //"success", "error"
};

export const blogItemsSlice = createSlice({
  name: "blogItems",
  initialState,
  reducers: {
    setDisplayMoreBlogItems: (state) => {
      state.limitBlogItems += 3;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddBlogItems.pending, (state) => {
      state.blogItems = [];
      state.statusBlogItems = "loading";
    });
    builder.addCase(
      fetchAddBlogItems.fulfilled,
      (state, action: PayloadAction<BlogElementType[]>) => {
        state.blogItems = action.payload;
        state.statusBlogItems = "success";
      }
    );
    builder.addCase(fetchAddBlogItems.rejected, (state) => {
      state.blogItems = [];
      state.statusBlogItems = "error";
    });
  },
});

export const selectBlogItems = (state: RootState) => state.blogItems;
export const { setDisplayMoreBlogItems } = blogItemsSlice.actions;
export default blogItemsSlice.reducer;
