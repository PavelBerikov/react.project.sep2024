import { IRecipe } from "../interfaces/recipesInterface.ts";
import {IRecipesResponse} from "../interfaces/recipesResponse.ts";
import {axiosInstance} from "./axiosService.tsx";

export const loadRecipes =async ():Promise<IRecipesResponse> => {
    return  await axiosInstance.get<IRecipesResponse>('recipes').then(response => response.data);
}

export const loadRecipeByID = async (id: string):Promise<IRecipe | null> => {
     const recipe = await axiosInstance.get<IRecipe>('recipes/'+id).then(response => response.data);
     console.log(recipe);
     return recipe
}