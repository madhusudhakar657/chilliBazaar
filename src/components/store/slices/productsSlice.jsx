// src/features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchProducts } from './productsAPI';

// Async thunk for fetching products
export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
  const response = {data:[]}
//   await fetchProducts();
  return response.data;
});

const productsSlice = createSlice({
  name: 'products/data',
  initialState: {
    productItems: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state) => state.products.productItems;
export default productsSlice.reducer;
