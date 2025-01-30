import {FC} from 'react';
import Recipes from '../components/Recipes/Recipes';
import {useAppSelector} from "../hooks/useAppSelector.tsx";
import SearchForm from "../components/searchForm/SearchForm.tsx";

const RecipesPage:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    return (
        <div>
            {
                loginUser&&
                <SearchForm/>
            }
            <Recipes/>
        </div>
    );
};

export default RecipesPage;