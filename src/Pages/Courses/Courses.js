import React from 'react';
import {  Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import Course from './Course';

const Courses = () => {
    const getData = useLoaderData();
    
    let course;
    if(getData.length> 0){
        course = 
        <Row xs={1} md={3} lg={3} className='g-4'>
            {
                getData.map(course => <Course data={course}></Course>)
            }
        </Row>
    }
    else{
        course = <h2>Sorry No Course Found About this Subject.</h2>
    }

    return (
        <div className='d-lg-flex container mx-auto my-4 position-relative'>
            <div className='col-sm-12 col-md-10'>
                {
                    course
                }
            </div>
            <div className='col-sm-12 col-md-2  ms-2 position-sticky top-0'>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Courses;