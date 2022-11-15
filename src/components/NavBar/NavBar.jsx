import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import "./NavBar.css"


function NavBar() {
  return (
    <Navbar  expand="lg" className='navColor'>
      <Nav.Link href="/"><img src="../../imagenes/lumilagro-removebg-preview.png" alt='lumilagro' className='widthLogo' /></Nav.Link>     
      <Container className='navBarColor'>
        <Navbar.Brand href="/" className='hoverLinks'>Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category/Termo acero" className='hoverLinks'>Termo acero</Nav.Link>
            <Nav.Link href="/category/Termo vidrio" className='hoverLinks'>Termo vidrio</Nav.Link>
            <Nav.Link href="/category/Bidón" className='hoverLinks'>Bidón</Nav.Link> 
            <Nav.Link href="/category/Termo vidrio clubes" className='hoverLinks'>Termo vidrio clubes</Nav.Link>             
          </Nav>
        </Navbar.Collapse>
       <CartWidget/>
      </Container>      
    </Navbar>   
  );
}

export default NavBar;