import {FC} from 'react';
import {IRecipe} from "../../interfaces/recipesInterface.ts";
import './recipe.css'

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    return (
        <div className={'recipeCard'}>
            <img src={recipe.image} alt={recipe.name}/>
            {recipe.id} - {recipe.name}
        </div>
    );
};

export default Recipe;