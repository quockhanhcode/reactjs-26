import { configureStore } from "@reduxjs/toolkit";
import { shoppingPhoneReducer } from "./shoppingPhoneReducer";

export const store = configureStore({
    reducer: {
        // combind child reducer here
        shoppingPhone: shoppingPhoneReducer,
    }
});