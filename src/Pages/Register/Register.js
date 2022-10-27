import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';

function Register() {
    const [accept, setAccept] = useState(false);
    const [showError, setShowError] =useState(null);

    const { createIdWithEmailAndPassword, updateUserData } = useContext(ContextProvider);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createIdWithEmailAndPassword(email, password)
        .then(() => {
            setShowError('');
            updateUserData(userName, photoURL)
            .then(()=>{})
            .catch((error) => { setShowError(error.message) })
            navigate(from, { replace: from });

        })
        .catch((error) => 
            {
                setShowError(error.message)
            })
    }

    return (
        <div className='d-grid col-sm-10 col-md-5 col-lg-3 mx-auto my-5 rounded border p-3 shadow'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="userName" placeholder="ex:- Md Rakib Bhuiyan" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex">
                    <Form.Check type="checkbox" onClick={() => setAccept(!accept)} />
                    <Form.Label className='ms-2'>Accept <Link to=''>Terms and Conditions</Link></Form.Label>
                </Form.Group>
                <Form.Text>Already have an account? Please <Link to='/login'>Log In</Link></Form.Text><br/>
                <Form.Text className='text-danger'>{showError}</Form.Text>
                <Button variant="primary" type="submit" className='d-block w-100' disabled={!accept}>
                    Sing Up
                </Button>
            </Form>
        </div>
    );
}

export default Register;
