import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipesDetailsPage from "../pages/RecipesDetailsPage.tsx";

export const router= createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: '/users', element: <UsersPage/>, children:[
                    {path:'users/:id', element: <UserDetailsPage/>}
                ]},
            {path: '/recipes', element: <RecipesPage/>, children: [
                    {path: 'recipes/:id', element: <RecipesDetailsPage/>}
                ]}
        ]},
    {path: '/login', element: <LoginPage/>}
]);