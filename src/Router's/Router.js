import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Pages/LayOut/LayOut';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
        children:[
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

const Router = () => {
    return (
        <></>
    );
};

export default Router;