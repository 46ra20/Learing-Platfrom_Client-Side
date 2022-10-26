import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function Course({data}) {
    const { title, course_img, description, course_id} = data;
    const navigate = useNavigate();
    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={course_img} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title className='fw-semibold'>{title}</Card.Title>
                    <Card.Text>
                        {
                            description.slice(0, 100)
                        }
                        ...<Link to='' className='text-decoration-none'>Read More</Link>
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/course/details/${course_id}`)}>Course Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Course;