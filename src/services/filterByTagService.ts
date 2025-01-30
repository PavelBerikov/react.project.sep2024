import {IRecipesResponse} from "../interfaces/recipesResponse.ts";
import {axiosInstance} from "./axiosService.tsx";

export const loadFilterByTag = async (tag: string):Promise<IRecipesResponse> => {
    return  await axiosInstance.get(`recipes/tag/` + tag).then(res => res.data);
}