import { configureStore } from "@reduxjs/toolkit";
import ProductSortAndFilter from "./slice/ProductSortAndFilter";
import sidebarSlice from "./slice/SidebarSlice";
import adminSidebarSlice from "./slice/AdminSidebarSlice";

const store = configureStore({
  reducer: {
    ProductSortAndFilter: ProductSortAndFilter.reducer,
    Sidebar : sidebarSlice.reducer,
    AdminSidebar: adminSidebarSlice.reducer
  },
  middleware: (gdm) => [...gdm()],
});

export default store