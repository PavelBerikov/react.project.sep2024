import {FC, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import Recipe from '../Recipe/Recipe.tsx';
import './recipes.css'
import Pagination from "../pagination/Pagination.tsx";
import { useSearchParams } from 'react-router-dom';


const Recipes:FC = () => {
    const dispatch = useAppDispatch();
    const {recipes} = useAppSelector(state => state.recipesSlice);
    const {loginUser} = useAppSelector(state => state.authSlice);
    const filter = recipes.filter(value => value.id <= 6);
    const [query] = useSearchParams();
    const page = parseInt(query.get('page') || '1');
    const skip = parseInt(query.get('skip') || '0');
    const limit = 20;
    useEffect(() => {
      dispatch(recipesSliceActions.getRecipes({limit, skip}))
    }, [dispatch, page]);
    return (
        <section className={'recipes'}>
            {
                !loginUser&&
                filter.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
            {

                loginUser&&
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)

            }
            <Pagination/>

        </section>
    );
};

export default Recipes;