import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import "./NavBar.css"
import {Link as LinkRouter} from "react-router-dom"


function NavBar() {
  return (
    <Navbar  expand="lg" className='navColor'>
      <LinkRouter to= "/"><img src="../../imagenes/lumilagro-removebg-preview.png" alt='lumilagro' className='widthLogo' />          
          </LinkRouter>      
           
      <Container className='navBarColor'>
      <LinkRouter to= "/" className='hoverLinks'>Inicio          
          </LinkRouter>   
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">   
                
          <LinkRouter to= "/category/Termo acero" className='hoverLinks'>Termo acero          
          </LinkRouter>              
          <LinkRouter to= "/category/Termo vidrio" className='hoverLinks'>Termo vidrio          
          </LinkRouter>              
          <LinkRouter to= "/category/Bidón" className='hoverLinks'>Bidón          
          </LinkRouter>   
          <LinkRouter to= "/category/Termo vidrio clubes" className='hoverLinks'>Termo vidrio clubes          
          </LinkRouter>                           
          </Nav>
        </Navbar.Collapse>
       <CartWidget/>
      </Container>      
    </Navbar>   
  );
}

export default NavBar;