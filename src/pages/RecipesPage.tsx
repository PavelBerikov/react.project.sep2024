import {FC} from 'react';
import Recipes from '../components/Recipes/Recipes';
import {Outlet} from "react-router-dom";

const RecipesPage:FC = () => {
    return (
        <div>
            <Outlet/>
            <Recipes/>
        </div>
    );
};

export default RecipesPage;