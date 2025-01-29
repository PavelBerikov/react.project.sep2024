import {FC, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import HomePage from "../pages/HomePage.tsx";

const MainLayout:FC = () => {
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(console.log);
    }, []);
    return (
        <div>
            <Menu/>
            <HomePage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;