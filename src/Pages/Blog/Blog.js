import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='d-grid col-md-5 col-sm-12 mx-auto my-5'>
            <Card border="success" className='mx-2 my-2'>
                <Card.Header><span className='fw-semibold'>Question:-</span>what is cors?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Cor is a tools. It's help you to shear your json data. To use it globally or another path.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="danger" className='mx-2 my-2'>
                <Card.Header><span className='fw-semibold'>Question:-</span>Why are you using firebase?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase provide by google. Firebase ensure your site security. And help you to protect your data from unauthorize person.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="success" className='mx-2 my-2'>
                <Card.Header><span className='fw-semibold'>Question:-</span>How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        If user dose not exist. This person can't go inner the private router. And private route navigate you login page. If user login then the user can access protected path or file.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="warning" className='mx-2 my-2'>
                <Card.Header><span className='fw-semibold'>Question:-</span>What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;