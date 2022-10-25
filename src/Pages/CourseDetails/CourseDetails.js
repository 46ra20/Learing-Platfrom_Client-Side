import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi'

const CourseDetails = () => {
    const getDetails = useLoaderData()
    const { author_name, price, title, description, duration, course_img, course_id } = getDetails;
    const navigate = useNavigate();
    return (
        <div className='d-md-flex container mx-auto my-4 position-relative'>
                <div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-12 col-md-5">
                            <img src={course_img} class="img-fluid rounded" alt="..." style={{height:'300px', width:'400px'}} />
                        </div>
                        <div class="col-md-7 ps-2">
                            <div class="card-body">
                                <h5 class="card-title fw-semibold">Course Name: {title}</h5>
                                <p class="card-text">{description}</p>
                                <p className=' m-0'><span className='fw-semibold'>Author:-</span> {author_name}</p>
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'><span className='fw-semibold'>Duration:-</span> {duration} Hours</p>
                                    <p className='m-0'><span className='fw-semibold'>Price:-</span> {price} $</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="outline-primary" className='mt-2' onClick={() => navigate(`/course/get-corse/${course_id}`)}>Get premium access <HiArrowNarrowRight></HiArrowNarrowRight> </Button>
                                    <Button variant="outline-danger" className='mt-2'>Download Course Summary <HiArrowNarrowDown></HiArrowNarrowDown> </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-sm-12 col-md-2  ms-2 position-sticky top-0'>
                    <RightNav></RightNav>
                </div>
            </div>
    );
};

export default CourseDetails;