import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";
import User from '../user/User.tsx';
import user from "../user/User.tsx";

const Users:FC = () => {
    const users = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(usersSliceActions.getUsers())
        console.log(users)
    }, [dispatch]);
    return (
        <div>
            {
                users.users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;