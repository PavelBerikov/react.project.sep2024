import  {FC} from 'react';
import {Link} from "react-router-dom";
import './menu.css'

const Menu:FC = () => {
    return (
        <header>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
        </header>
    );
};

export default Menu;