import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { FetchExample } from '../pages/fetch';
import { ExercisesRoute } from '../pages';
import { ReduxExample } from '../examples/ReduxExample'
import { MiddlewareExample2 } from '../examples/MiddlewareExample'



const navMenu = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/todos',
        component: ExercisesRoute,
        title: 'todos',
    },
    {
        path: '/middlewear',
        component: MiddlewareExample2,
        title: 'middlewear',
    },
    {
        path: '/redux',
        component: ReduxExample,
        title: 'reduxExample',
    },
    {
        path: "/fetch",
        component: FetchExample,
        title: "FetchExample",
    },
];


export const Layout = ({children}) => {

    const isActive = {
        textDecoration: "none",
        color: "rgba(255, 255, 255, 1)",
      };

    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">Lesson 8</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        
                        {navMenu?.map(({title,path}) => (
                            <NavLink activeStyle={isActive} to={path}>
                                {title}
                            </NavLink>
                        ))}
                      </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container component={navMenu.component}>{children} </Container>
        </>
    )
}