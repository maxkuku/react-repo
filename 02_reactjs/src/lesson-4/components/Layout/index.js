import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {navigation} from '../../navigation'



const navMenu = [
    {
        path: navigation.home,
        title: 'Home',
    },
    {
        path: navigation.profile,
        title: 'profile',
    },
    {
        path: navigation.posts,
        title: 'posts',
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
                  <Navbar.Brand href="#home">Lesson 4</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        
                        {navMenu?.map(({title,path}) => (
                            <NavLink 
                              activeStyle={isActive} 
                              to={path}>
                                {title}
                            </NavLink>
                        ))}
                      </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container>{children}</Container>
        </>
    )
}