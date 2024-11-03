// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
// import cartReducer from './slices/cartSlice';
// import userReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
    // user: userReducer,
  },
});

export default store;
