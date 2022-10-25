import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import './LogIn.css';

function LogIn() {
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='d-grid col-sm-10 col-md-5 col-lg-3 mx-auto my-5 rounded border p-3 shadow'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                    <Form.Text className="text-muted py-2">
                        <p style={{ fontSize: '11px' }}>We'll never share your email and password with anyone else.</p>
                    </Form.Text>
                    <Form.Text>
                        You have no account? Please <Link to='/register'> Create</Link> one.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block w-100 mx-auto'>
                    LogIn
                </Button>
            </Form>
            <div className='loginOtherWay my-2'>
                <p>Or LogIn with</p>
                <Button variant="outline-primary" className='d-block w-100'>
                    <FcGoogle className='me-2'></FcGoogle>
                    Google
                </Button>
                <Button variant="outline-primary" className='d-block w-100 mt-2'>
                    <AiFillGithub className='me-2'></AiFillGithub>
                    Git Hub
                </Button>
            </div>
        </div>
    );
}

export default LogIn;