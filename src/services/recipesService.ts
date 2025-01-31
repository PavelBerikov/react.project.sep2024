import { IRecipe } from "../interfaces/recipesInterface.ts";
import {IRecipesResponse} from "../interfaces/recipesResponse.ts";
import {axiosInstance} from "./axiosService.tsx";

export const loadRecipes =async (limit = 20, skip = 0):Promise<IRecipesResponse> => {
    return  await axiosInstance.get<IRecipesResponse>(`recipes?limit=${limit}&skip=${skip}`).then(response => response.data);
}

export const loadRecipeByID = async (id: string):Promise<IRecipe | null> => {
     return  await axiosInstance.get<IRecipe>('recipes/'+id).then(response => response.data);

}