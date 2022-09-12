import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "../features/address/address";

export const store = configureStore({
  reducer: { address: addressReducer },
});

export type AppState = ReturnType<typeof store>;
