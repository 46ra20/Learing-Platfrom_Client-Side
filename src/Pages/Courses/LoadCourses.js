import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LoadCourses = () => {
    const getData = useLoaderData();
    console.log(getData)
    return (
        <div>
            
        </div>
    );
};

export default LoadCourses;