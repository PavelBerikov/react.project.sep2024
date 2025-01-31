import {IUsersResponse} from "../interfaces/usersResponseInterface.ts";
import {axiosInstance} from "./axiosService.tsx";
import {IUser} from "../interfaces/userInterface.ts";

export const loadUsers = async ():Promise<IUsersResponse> => {
    const data = await axiosInstance.get<IUsersResponse>("users").then((response) => response.data);
    console.log(data.users);
    return data
}
export const loadUser = async (id: string):Promise<IUser> => {
    const user = await axiosInstance.get<IUser>('users/'+id).then(response => response.data);
    console.log(user)
    return  user
}