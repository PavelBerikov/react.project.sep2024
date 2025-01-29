import {IUsersResponse} from "../interfaces/usersResponseInterface.ts";
import {axiosInstance} from "./axiosService.tsx";

export const loadUsers = async ():Promise<IUsersResponse> => {
    const {data} = await axiosInstance.get("users").then((response) => response.data);
    console.log(data.users);
    return data
}