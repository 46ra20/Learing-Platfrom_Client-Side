import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';

const ErrorPage = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className='d-grid col-md-4 col-sm-11 mx-auto my-5 border rounded text-center px-3 py-5 shadow'>
                <h5>Sorry to Say...</h5>
                <h6>But we can't find any page in this path.</h6>
                <h6>Please go <Link to='/'>Home</Link></h6>

            </div>
        </div>
    );
};

export default ErrorPage;