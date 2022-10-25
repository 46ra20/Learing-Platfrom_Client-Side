import React, { useEffect, useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const RightNav = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const navigate = useNavigate();
    return (
        <div>
            <ListGroup>
                {
                    menu.map(category => 
                        <Button variant="outline-primary" className='d-block w-100 mb-2'
                            onClick={() => navigate(`/course/${category.category_id}`)}
                            >
                                {category.category_name}
                            </Button>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default RightNav;