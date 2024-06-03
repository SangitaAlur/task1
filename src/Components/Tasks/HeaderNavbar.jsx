import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './HeaderNavbar.css';  

const HeaderNavbar = () => {
  return (
    <header className="sticky-top">
      <div className="header-top" >
        <Container className="d-flex justify-content-between align-items-center py-2" >
          <div className="logo">
            <h1>AJIO</h1>
          </div>
          <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
        </Container>
      </div>
      <Navbar bg="black" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/Home">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/MEN">
            <Nav.Link>MEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/WOMEN">
            <Nav.Link>WOMEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/KIDS">
            <Nav.Link>KIDS</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/BEAUTY">
            <Nav.Link>BEAUTY</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/HOME AND KITCHEN">
            <Nav.Link>HOME AND KITCHEN</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/OTHER ACCESSORIES">
            <Nav.Link>OTHER ACCESSORIES</Nav.Link>
          </LinkContainer>
        </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderNavbar;
