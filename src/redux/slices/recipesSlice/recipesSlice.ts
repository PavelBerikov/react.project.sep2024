import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../../interfaces/recipesInterface.ts";
import {loadRecipes} from "../../../services/recipesService.ts";

type initialStateType = {
    recipes: IRecipe[],
}
const initialState:initialStateType = {
    recipes: [],
};
const getRecipes = createAsyncThunk(
    'authSlice/getRecipes',
    async (_, thunkAPI) => {
        try {
            const recipes = await loadRecipes()
            return thunkAPI.fulfillWithValue(recipes)
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
export const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
        })
    }
});

export const recipesSliceActions = {
    ...recipesSlice.actions, getRecipes
}