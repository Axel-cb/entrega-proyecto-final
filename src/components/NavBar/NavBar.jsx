import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"


function NavBar() {
  return (
    <Navbar  expand="lg" className='navColor'>
      <div><img src="../../imagenes/lumilagro-removebg-preview.png" className='widthLogo' /></div>
      <Container className='navBarColor'>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
       <CartWidget/>
      </Container>      
    </Navbar>   
  );
}

export default NavBar;