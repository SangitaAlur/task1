// src/components/CustomNavbar.jsx
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand href="/"><h1>AJIO</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"></Nav>
        <Nav className='types'>
          <LinkContainer to="/Home">
            <Nav.Link>MEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/home">
            <Nav.Link>WOMEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/home">
            <Nav.Link>KIDS</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/home">
            <Nav.Link>BEAUTY</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/home">
            <Nav.Link>HOME AND KITCHEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/home">
            <Nav.Link>OTHER ACCESSORIES</Nav.Link>
          </LinkContainer>
          
          <NavDropdown  title="login" id="basic-nav-dropdown">
            <LinkContainer to="/login">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <style type="text/css">
        {`
          .nav-link:hover {
            color: #ffc107 !important; /* Change the color to a yellow shade */
            text-decoration: underline;
          }
        `}
      </style>
    </Navbar>
  );
};

export default CustomNavbar;
