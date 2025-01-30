import {FC} from 'react';
import {IRecipe} from "../../interfaces/recipesInterface.ts";
import './recipe.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import { recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import Tag from '../Tag.tsx';
import { useNavigate } from 'react-router-dom';

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    const auth = useAppSelector(state => state.authSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className={auth.loginUser ? 'recipeCard' : 'recipeCard blur'}>
            <div onClick={() => {
                dispatch(recipesSliceActions.setId(recipe.id))
                navigate(`/recipes/details/${recipe.id}`)
            }}>{recipe.name}</div>
            {
                recipe.tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }
            <hr/>
        </div>
    );
};

export default Recipe;