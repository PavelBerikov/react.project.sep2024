import  {FC} from 'react';
import {Link} from "react-router-dom";
import './menu.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";

const Menu:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);

    return (
        <header>
            {
                !loginUser &&
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            }
            {
                loginUser &&
                <div>
                    <ul>
                        <li><Link to={loginUser ? '/auth' : '/'}>Home</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/auth/users'}>Users</Link></li>
                        <li><Link to={'/auth/recipes'}>Recipes</Link></li>
                    </ul>
                    <img src={loginUser.image} alt={loginUser.firstName}/>
                </div>
            }
        </header>
    );
};

export default Menu;