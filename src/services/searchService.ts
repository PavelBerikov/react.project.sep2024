import {axiosInstance} from "./axiosService.tsx";
import {IRecipesResponse} from "../interfaces/recipesResponse.ts";

export const loadSearchRecipes = async (value: string):Promise<IRecipesResponse> => {
    const recipes = await axiosInstance.get<IRecipesResponse>(`recipes/search?q=${value}`).then(data => data.data);
    console.log(recipes);
    return recipes;
}