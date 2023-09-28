import { configureStore } from "@reduxjs/toolkit";
import ProductSortAndFilter from "./slice/ProductSortAndFilter";

const store = configureStore({
  reducer: {
    ProductSortAndFilter: ProductSortAndFilter.reducer,
  },
  middleware: (gdm) => [...gdm()],
});

export default store