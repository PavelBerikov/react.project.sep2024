import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";

const UserDetails:FC = () => {
    const {id} = useParams();
    const {user} = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id){
            dispatch(usersSliceActions.getUser(id))
        }
    }, [id, dispatch, user]);
    return (
        <div>
            {
                user&&
                <div>
                    <div>{user.id} - {user.firstName} {user.lastName}</div>
                    <img src={user.image} alt={user.firstName}/>
                </div>
            }
        </div>
    );
};

export default UserDetails;