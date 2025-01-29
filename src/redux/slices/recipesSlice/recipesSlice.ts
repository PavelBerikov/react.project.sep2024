import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRecipe} from "../../../interfaces/recipesInterface.ts";
import {loadRecipeByID, loadRecipes} from "../../../services/recipesService.ts";

type initialStateType = {
    recipes: IRecipe[],
    recipe: IRecipe | null,
    id:number | null
}
const initialState:initialStateType = {
    recipes: [],
    recipe: null,
    id:null
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
const getRecipeById = createAsyncThunk(
    'recipesSlice/getRecipeById',
    async (id:string, thunkAPI) => {
        try {
            const response = await loadRecipeByID(id);
            return thunkAPI.fulfillWithValue(response)
        }catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
export const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState: initialState,
    reducers:{
        setId: (state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
        })
            .addCase(getRecipeById.fulfilled, (_, action) => {
                console.log(action.payload)
            })
    }
});

export const recipesSliceActions = {
    ...recipesSlice.actions, getRecipes, loadRecipeByID
}