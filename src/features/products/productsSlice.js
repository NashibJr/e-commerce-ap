import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
  search: [],
};
const client = axios.create({
  baseURL: "https://fakestoreapi.com/products?limit",
});
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await client.get();
    return response.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      const response = state.products.filter((product) =>
        product.title.includes(action.payload)
      );
      state.search = response;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { handleSearch } = productsSlice.actions;

export default productsSlice;
