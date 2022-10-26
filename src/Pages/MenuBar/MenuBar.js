import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import './MenuBar.css';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import { useContext } from 'react';
import { ContextProvider } from '../../UserContext/UserContext';
import { NavDropdown } from 'react-bootstrap';
import {BsPersonCircle} from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';

function MenuBar() {
    const { userData, logOut, theme, setTheme } = useContext(ContextProvider);

    return (
        <Navbar bg={`${theme?'primary':'dark'}`} expand="lg">
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
                        <NavLink to='/course' className='btn btn-primary me-2'>Courses</NavLink>
                        <NavLink to='/fqa' className='btn btn-primary me-2'>FAQ</NavLink>
                        <NavLink to='/blog' className='btn btn-primary me-2'>Blog</NavLink>
                        <NavLink className='text-white fs-3 btn-primary fw-bold mt-2' data-tip='Night Mood On/Off' onClick={()=> setTheme(!theme)}>
                                {
                                theme ? <MdToggleOff className='d-block mx-auto'></MdToggleOff>:
                                    <MdToggleOn className='d-block mx-auto'></MdToggleOn>
                                }
                        </NavLink>
                        {
                            userData ? <NavDropdown title=
                                {
                                    userData ?
                                        <>
                                            {
                                                userData.photoURL ? <img
                                                    src={userData.photoURL}
                                                    width="24"
                                                    height="24"
                                                    className="d-inline-block  align-top rounded-circle ms-2"
                                                    alt="React Bootstrap logo"
                                                    title={`${userData.displayName}`}
                                                /> :
                                                <BsPersonCircle style={{ fontSize: '20px' }} className={`${theme?'':'bg-white'} ms-2 rounded-circle`} title={`${userData.displayName}`}></BsPersonCircle>
                                            }
                                        </>
                                        :
                                        <NavLink to='/login' className='btn btn-primary ms-2'>LogIn</NavLink>
                                }
                            >
                                {
                                    userData && <NavDropdown.Item className='btn-primary' onClick={() => logOut()}>Log Out</NavDropdown.Item>

                                }
                            </NavDropdown>
                            :
                                <NavLink to='/login' className='btn btn-primary ms-2'>LogIn</NavLink>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ReactTooltip/>
        </Navbar>
    );
}

export default MenuBar;