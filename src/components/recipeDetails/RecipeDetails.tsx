import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";

const RecipeDetails:FC = () => {
    const {recipe, id} = useAppSelector(state => state.recipesSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipes())
        console.log(recipe)
    }, [id]);
    return (
        <div>
            {
                recipe &&
                <div>{recipe.id} - {recipe.name}</div>
            }
        </div>
    );
};

export default RecipeDetails;