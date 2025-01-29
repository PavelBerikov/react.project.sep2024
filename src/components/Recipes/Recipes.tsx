import {FC, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import Recipe from '../Recipe/Recipe.tsx';
import './recipes.css'


const Recipes:FC = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipesSlice);
    const auth = useAppSelector(state => state.authSlice);
    const filter = recipes.recipes.filter(value => value.id <= 6);
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipes())
    }, [dispatch]);
    return (
        <section className={'recipes'}>
            {
                !auth.loginUser&&
                filter.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
            {
                auth.loginUser&&
                recipes.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
        </section>
    );
};

export default Recipes;