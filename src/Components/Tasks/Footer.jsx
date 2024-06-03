// src/components/Footer.jsx
import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
      <Navbar.Text className="text-white"><h5>AJIO </h5>
       <h6>Terms And Conditions Applied</h6>
      </Navbar.Text>
    </Navbar>
  );
};

export default Footer;
