import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { navigation, navAuth } from '../LogRoute';
import { auth } from "../../firebase"
import { Link } from 'react-router-dom';




export const LogRouter = ({ children }) => {
    return (
        <>
        <Navbar bg="dark" variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>Lesson 9. Firebase</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        {[...navigation, ...navAuth].map(
                            ({id, title, path}) => (
                                <Nav.Link key={id} as={Link} to={path}>
                                    {title}
                                </Nav.Link>
                            )
                        )}
                        <Button onClick={() => {
                            auth.signOut();
                        }}>
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        </>
    )
}