import { configureStore } from "@reduxjs/toolkit";
import SwitchSlice from "./Slices/SwitchSlice";

export const store = configureStore({
  reducer: { SwitchElemnts: SwitchSlice },
});
