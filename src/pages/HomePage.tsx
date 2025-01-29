import  {FC} from 'react';
import Recipes from "../components/Recipes/Recipes.tsx";
import Menu from "../components/menu/Menu.tsx";

const HomePage:FC = () => {
    return (
        <div>
            <Menu/>
            <Recipes/>
        </div>
    );
};

export default HomePage;