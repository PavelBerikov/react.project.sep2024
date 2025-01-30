import {FC, useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../hooks/useAppDispatch.tsx";
import SearchForm from "../components/searchForm/SearchForm.tsx";
import {recipesSliceActions} from "../redux/slices/recipesSlice/recipesSlice.ts";
import Recipe from '../components/Recipe/Recipe.tsx';

const SearchPage:FC = () => {
    const {searchWord} = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();
    const {recipes} = useAppSelector(state => state.recipesSlice);
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipeBySearch(searchWord))
        console.log(recipes)
    }, [searchWord]);
    return (
        <div>
            <SearchForm/>
            {
                recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)
            }
        </div>
    );
};

export default SearchPage;