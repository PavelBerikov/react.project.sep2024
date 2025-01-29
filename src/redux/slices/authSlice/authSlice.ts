import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../../interfaces/authInterface.ts";
import {login} from "../../../services/authService.ts";
import {ILoginUserResponse} from "../../../interfaces/LoginUserResponse.ts";


type initialStateType = {
    loginUser: ILoginUserResponse | null
}

const initialState: initialStateType = {
    loginUser: null
};

const loginUser = createAsyncThunk(
    'authSlice/loginUser',
    async (auth: IAuth, thunkAPI) => {
        try {
            const user = await login(auth);
            return thunkAPI.fulfillWithValue(user)
        }catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some err')
        }
    }
);
export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loginUser = action.payload
            console.log(action.payload.accessToken)
        });
    }
});

export const authSliceActions = {
    ...authSlice.actions, loginUser
}