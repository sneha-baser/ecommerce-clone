import React from 'react';
import { NavLink , Jumbotron, Navbar, Nav, NavDropdown , Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup from '../../container/Signup';
import signin from '../../container/Signin';


/**
* @author
* @function 
**/

const Header = (props) => {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <li className="nav-item">
                            <NavLink href="/signup" className="nav-link">Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href="/signin" className="nav-link">Signin</NavLink>
                        </li>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )

}

export default Header;