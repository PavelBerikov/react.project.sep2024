import {FC} from 'react';
import Menu from '../components/menu/Menu';
import {Outlet} from "react-router-dom";

const AuthHomePage:FC = () => {
    return (
        <div>
            <Menu/>
            auth home
            <Outlet/>
        </div>
    );
};

export default AuthHomePage;