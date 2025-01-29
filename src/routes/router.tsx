import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthHomePage from "../pages/AuthHomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import RecipesDetailsPage from "../pages/RecipesDetailsPage.tsx";



export const router= createBrowserRouter([
    {path: '/', element: <MainLayout/>},
    {path: '/login', element: <LoginPage/>},
    {path:'/auth', element: <AuthHomePage/>, children:[
            {path: 'recipes', element: <RecipesPage/>, children: [
                    {path:'recipes/:id', element: <RecipesDetailsPage/>}
                ]},
            {path: 'users', element: <UsersPage/>}
        ]}
]);