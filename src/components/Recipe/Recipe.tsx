import {FC} from 'react';
import {IRecipe} from "../../interfaces/recipesInterface.ts";
import './recipe.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    const auth = useAppSelector(state => state.authSlice);
    return (
        <div className={auth.loginUser ? 'recipeCard' : 'recipeCard blur'}>
            <img src={recipe.image} alt={recipe.name}/>
            <div>{recipe.name}</div>
        </div>
    );
};

export default Recipe;