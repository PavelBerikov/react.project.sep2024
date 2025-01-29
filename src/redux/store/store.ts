import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "../slices/authSlice/authSlice.ts";
import { recipesSlice } from "../slices/recipesSlice/recipesSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        recipesSlice: recipesSlice.reducer
    }
});