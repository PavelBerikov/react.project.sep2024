import axios from "axios";
import {IAuth} from "../interfaces/authInterface.ts";
import {ILoginUserResponse} from "../interfaces/LoginUserResponse.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers:{}
});
export const login = async (auth: IAuth): Promise<ILoginUserResponse> => {
    const {data} = await axiosInstance.post('auth/login', auth).then(response => response.data);
    return data
}