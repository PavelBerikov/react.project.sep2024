import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "../slices/authSlice/authSlice.ts";
import { recipesSlice } from "../slices/recipesSlice/recipesSlice.ts";
import {usersSlice} from "../slices/usersSlice/usersSlice.ts";
import { searchSlice } from "../slices/searchSlice/searchSlice.ts";
import {filterByTagSlice} from "../slices/filterByTagSlice/filterByTagSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        recipesSlice: recipesSlice.reducer,
        usersSlice: usersSlice.reducer,
        searchSlice: searchSlice.reducer,
        filterByTagSlice: filterByTagSlice.reducer,
    }
});