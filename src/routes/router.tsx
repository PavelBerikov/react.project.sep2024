import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthHomePage from "../pages/AuthHomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipesDetailsPage from "../pages/RecipesDetailsPage.tsx";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import SearchByTagPage from "../pages/SearchByTagPage.tsx";



export const router= createBrowserRouter([
    {path: '/', element: <MainLayout/>},
    {path: '/login', element: <LoginPage/>},
    {path:'/auth', element: <AuthHomePage/>, children:[
            {path: 'recipes', element: <RecipesPage/>},
            {path: 'users', element: <UsersPage/>},
            {path:'recipes/search', element: <SearchPage/>}
        ]},
    {path:'users/details/:id', element: <UserDetailsPage/>},
    {path:'recipes/details/:id', element: <RecipesDetailsPage/>},
    {path: '/recipe/searchByTag/:tag', element: <SearchByTagPage/>}

]);

