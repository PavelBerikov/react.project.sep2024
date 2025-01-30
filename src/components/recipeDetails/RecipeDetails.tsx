import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import {useParams} from "react-router-dom";

const RecipeDetails:FC = () => {
    const {recipe} = useAppSelector(state => state.recipesSlice);
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.id){
            dispatch(recipesSliceActions.getRecipeById(params.id))
        }
    }, [params.id]);
    return (
        <div>
            {
                recipe &&
                <div>{recipe.id} - {recipe.userId}</div>
            }
        </div>
    );
};

export default RecipeDetails;