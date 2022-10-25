import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Pages/Courses/Courses';
import LayOut from '../Pages/LayOut/LayOut';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import PremiumUser from '../Pages/PremiumUser/PremiumUser';

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
            },
            {
                path:'/',
                loader: async () => fetch('https://assignment-10-server-psi.vercel.app/course/07'),
                element: <Courses></Courses>
            },
            {
                path: '/course',
                loader: async () => fetch('https://assignment-10-server-psi.vercel.app/course/07'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:Id',
                loader: async ({ params }) => fetch(`https://assignment-10-server-psi.vercel.app/course/${params.Id}`),
                element: <Courses></Courses>
            },
            {
                path:'/course/details/:courseId',
                loader: async ({ params }) => fetch(`https://assignment-10-server-46ra20.vercel.app/course/details/${params.courseId}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path: '/course/get-corse/:courseId',
                loader: async ({ params }) => fetch(`https://assignment-10-server-46ra20.vercel.app/course/details/${params.courseId}`),
                element: <PrivateRoute><PremiumUser></PremiumUser></PrivateRoute>
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