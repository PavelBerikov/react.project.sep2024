import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/userInterface";
import {loadUser, loadUsers} from "../../../services/usersService";

type initialStateType = {
    users: IUser[],
    user: IUser | null

}
const initialState:initialStateType = {
    users: [],
    user: null
}

const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async (_, thunkAPI) => {
        try {
            const response = await loadUsers();
            return thunkAPI.fulfillWithValue(response)
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
const getUser = createAsyncThunk(
    'usersSlice/getUser',
    async (id:string, thunkAPI) => {
        try {
            const user = await loadUser(id);
            return thunkAPI.fulfillWithValue(user)
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            console.log(action.payload)
            state.users = action.payload.users
        })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
            })

    }
});

export const usersSliceActions = {
    ...usersSlice.actions, getUsers, getUser
}