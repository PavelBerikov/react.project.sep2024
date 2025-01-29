import {FC} from 'react';
import {IRecipe} from "../../interfaces/recipesInterface.ts";
import './recipe.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import { recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import {useNavigate} from "react-router-dom";

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    const auth = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className={auth.loginUser ? 'recipeCard' : 'recipeCard blur'}
        onClick={() => {
            dispatch(recipesSliceActions.setId(recipe.id))
            navigate(`/auth/recipes/${recipe.id}`)
        }}>
            <img src={recipe.image} alt={recipe.name}/>
            <div>{recipe.name}</div>
        </div>
    );
};

export default Recipe;