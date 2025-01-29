import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/userInterface";
import { loadUsers } from "../../../services/usersService";

type initialStateType = {
    users: IUser[],

}
const initialState:initialStateType = {
    users: [],


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
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload.users
        })
    }
});

export const usersSliceActions = {
    ...usersSlice.actions, getUsers
}