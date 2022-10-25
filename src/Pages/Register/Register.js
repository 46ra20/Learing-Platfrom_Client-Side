import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

function Register() {
    const [accept, setAccept] = useState(false);

    const { createIdWithEmailAndPassword } = useContext(ContextProvider);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, photoURL, email, password);
        createIdWithEmailAndPassword(email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error.massage))
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
                    <Form.Label className='ms-2'>Accept <Link to=''>Tram and Condition</Link></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block w-100' disabled={!accept}>
                    Sing Up
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

export default Register;
