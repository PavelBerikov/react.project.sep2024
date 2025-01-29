import {FC, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import Recipe from '../Recipe/Recipe.tsx';

const Recipes:FC = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipesSlice);
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipes())
    }, []);
    return (
        <div>
            {
                recipes.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

export default Recipes;