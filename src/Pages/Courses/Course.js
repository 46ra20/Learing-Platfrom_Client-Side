import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Course({data}) {
    const { title, course_img, description} = data;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={course_img} style={{ height: '180px' }} />
                <Card.Body>
                    <Card.Title className='fw-semibold'>{title}</Card.Title>
                    <Card.Text>
                        {
                            description.slice(0, 100)
                        }
                        ...<Link to='' className='text-decoration-none'>Read More</Link>
                    </Card.Text>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Course;