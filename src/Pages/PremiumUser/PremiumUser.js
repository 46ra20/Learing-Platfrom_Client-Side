import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumUser = () => {
    const getCourseData = useLoaderData();
    return (
        <div className='my-5 w-50 text-center border rounded px-3 py-2 shadow mx-auto'>
            <div>
                <h2>You get this course.</h2>
                <h3><span className='fw-semibold'>Your Course Name:- </span>   {getCourseData.title}</h3>
            </div>
        </div>
    );
};

export default PremiumUser;