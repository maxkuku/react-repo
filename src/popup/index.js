

import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



const Popup = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
    }
    const handleShow = () => setShow(true);
  
    return (

    <div>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="localhost:8080">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="primary" onClick={handleShow}>
                Заказать доставку
                </Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    


        
           
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Заполните форму</Modal.Title>
            </Modal.Header>
            <Modal.Body className="form-body">
                

            <div className="container">
                <div className="col-md-10 offset-md-1">
                <Header />
                <ContactForm />
                </div>
            </div>


            </Modal.Body>
            
            </Modal>
 


      </div>
    );
}



  export default Popup;