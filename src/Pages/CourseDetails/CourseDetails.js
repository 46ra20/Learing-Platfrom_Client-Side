import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi'
import Pdf from "react-to-pdf";
const ref = React.createRef();


const CourseDetails = () => {
    const getDetails = useLoaderData()
    const { author_name, price, title, description, duration, course_img, course_id } = getDetails;
    const navigate = useNavigate();

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10, 8]
    };

    return (
        <div className='d-md-flex container mx-auto my-4 position-relative'>
                <div>
                <div className="card mb-3">
                    <div className="row g-0 shadow">
                        <div className="col-12 col-md-5">
                            <img src={course_img} className="img-fluid rounded" alt="..." style={{height:'300px', width:'400px'}} />
                        </div>
                        <div className="col-md-7 ps-2">
                            <div className="card-body">
                                <div ref={ref}>
                                    <h5 className="card-title fw-semibold">Course Name: {title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className=' m-0'><span className='fw-semibold'>Author:-</span> {author_name}</p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='m-0'><span className='fw-semibold'>Duration:-</span> {duration} Hours</p>
                                        <p className='m-0'><span className='fw-semibold'>Price:-</span> {price} $</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="outline-primary" className='mt-2' onClick={() => navigate(`/course/get-corse/${course_id}`)}>Get premium access <HiArrowNarrowRight></HiArrowNarrowRight> </Button>
                                    <Pdf targetRef={ref} filename={`${title}-course.pdf`} options={options} x={.5} y={.5} scale={0.8}>
                                        {({ toPdf }) => <Button variant='outline-danger' className='mt-2' onClick={toPdf}>Download Course Summary <HiArrowNarrowDown></HiArrowNarrowDown></Button>}
                                    </Pdf>
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