import React, { useEffect, useState } from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const RightNav = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-psi.vercel.app/category')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const navigate = useNavigate();
    return (
        <div>
            <h4 className='border-bottom text-center mb-3'>All Category</h4>
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