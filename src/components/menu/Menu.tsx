import  {FC} from 'react';
import {Link} from "react-router-dom";
import './menu.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";

const Menu:FC = () => {
    const auth = useAppSelector(state => state.authSlice);

    return (
        <header>
            {
                !auth.loginUser &&
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            }
            {
                auth.loginUser &&
                <ul>
                    <li><Link to={auth.loginUser ? '/auth' : '/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/auth/users'}>Users</Link></li>
                    <li><Link to={'/auth/recipes'}>Recipes</Link></li>
                </ul>
            }
        </header>
    );
};

export default Menu;