import React from 'react';
import {  Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import Course from './Course';

const Courses = () => {
    const getData = useLoaderData();
    console.log(getData);
    return (
        <div className='d-lg-flex container mx-auto my-4'>
            <div className='col-sm-12 col-md-10'>
                <Row xs={1} md={3} lg={3} className='g-4'>
                    {
                        getData.map(course => <Course data={course}></Course>)
                    }
                </Row>
            </div>
            <div className='col-md-2 d-none d-md-block ms-2' fixed='top'>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Courses;