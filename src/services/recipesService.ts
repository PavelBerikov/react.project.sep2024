import {IRecipesResponse} from "../interfaces/recipesResponse.ts";
import {axiosInstance} from "./axiosService.tsx";

export const loadRecipes =async ():Promise<IRecipesResponse> => {
    const response = await axiosInstance.get<IRecipesResponse>('recipes').then(response => response.data);
    console.log();
    return response;
}