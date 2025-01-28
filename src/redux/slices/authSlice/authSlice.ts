import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../../../interfaces/authInterface.ts";
type initialStateType = {
    username: string | null,
    password: string | null
}
const initialState: initialStateType = {
    username: null,
    password: null
};
createAsyncThunk(
    'authSlice/login',
    async (auth, thunkAPI) => {
        try {
            await
        }
    }
)
export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers:{
        loginUser: (state, action: PayloadAction<IAuth>) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            console.log(state)
        },

    }
});

export const authSliceActions = {
    ...authSlice.actions
}