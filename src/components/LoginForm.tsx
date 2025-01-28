import {useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface.ts";
import {authSliceActions} from "../redux/slices/authSlice/authSlice.ts";

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm<IAuth>();

    function login(user: IAuth) {
        authSliceActions.loginUser(user);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder='username' {...register('username')} />
            <input type="text" placeholder='password' {...register('password')} />
            <button>Login</button>
        </form>
    );
};

export default LoginForm;