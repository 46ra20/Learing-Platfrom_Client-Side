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
                        <NavLink to='/courses' className='btn btn-primary'>Courses</NavLink>
                        <NavLink to='/fqa' className='btn btn-primary'>FAQ</NavLink>
                        <NavLink to='/blog' className='btn btn-primary'>Blog</NavLink>
                        <NavLink className='text-white fs-3 btn-primary fw-bold' title='Night Mood On/Off'>
                                <MdToggleOff className='d-block mx-auto'></MdToggleOff>
                        </NavLink>
                        <NavLink to='/login' className='btn btn-primary ms-2'>LogIn</NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;