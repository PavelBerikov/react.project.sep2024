import {FC} from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import Menu from "../components/menu/Menu.tsx";


const LoginPage:FC = () => {
    return (
        <div>
            <Menu/>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;