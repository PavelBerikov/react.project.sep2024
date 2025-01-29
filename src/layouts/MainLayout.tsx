import {FC} from 'react';
import HomePage from "../pages/HomePage.tsx";
import {useAppSelector} from "../hooks/useAppSelector.tsx";
import AuthHomePage from "../pages/AuthHomePage.tsx";

const MainLayout:FC = () => {
    const authUser = useAppSelector(state => state.authSlice);
    return (
        <div>
            {
                !authUser&&
                <AuthHomePage/>
            }
            {
                authUser&&
                <HomePage/>
            }

        </div>
    );
};

export default MainLayout;