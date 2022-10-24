import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import './MenuBar.css';
import { MdToggleOff } from 'react-icons/md';

function MenuBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand className=' p-0 m-0'>
                         <div className='d-flex align-items-center'>
                            <img
                                src={logo}
                                width="48"
                                height="48"
                                className="d-inline-block align-top rounded-circle"
                                alt="React Bootstrap logo"
                            />
                            <div className='ms-3'>
                                 <h4 className='m-0 hederText' style={{ letterSpacing: '12px'}}>JSRN</h4>
                                 <p className='m-0 text-white' style={{fontSize:'12px'}}>Learning Platform</p>
                           </div>
                        </div>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><NavLink to='/courses' className='btn btn-primary'>Courses</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/fqa' className='btn btn-primary'>FAQ</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/blog' className='btn btn-primary'>Blog</NavLink></Nav.Link>
                        <Nav.Link title='Night Mood On/Off'>
                            <NavLink className='text-white fs-3 btn-primary fw-bold'>
                                <MdToggleOff></MdToggleOff>
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link><NavLink to='/login' className='btn btn-primary'>LogIn</NavLink></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;