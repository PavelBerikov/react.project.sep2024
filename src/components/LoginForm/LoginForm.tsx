import {useForm} from "react-hook-form";
import { IAuth } from "../../interfaces/authInterface";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { authSliceActions } from "../../redux/slices/authSlice/authSlice";

const LoginForm = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const onSubmit = (user: IAuth) => {
        dispatch(authSliceActions.loginUser(user))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='username' {...register('username')} />
            <input type="text" placeholder='password' {...register('password')} />
            <button>Login</button>
        </form>
    );
};

export default LoginForm;