import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';

export const store = configureStore({
  reducer: {
    dagangan: ProductSlice,
  },
});
