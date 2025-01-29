import {ILoginUserResponse} from "../interfaces/LoginUserResponse.ts";
import {IAuth} from "../interfaces/authInterface.ts";
import {axiosInstance} from "./axiosService.tsx";


export const login = async (auth:IAuth):Promise<ILoginUserResponse> => {
    const {data:IUtherWithTokens} = await axiosInstance.post<ILoginUserResponse>('auth/login', auth);
    console.log(IUtherWithTokens);
    return IUtherWithTokens;
}