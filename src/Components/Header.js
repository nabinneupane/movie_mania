import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Container className="p-0" fluid={true}>
      <Navbar bg="dark" variant="dark " className="border-light" expand="lg">
        <Navbar.Brand className="mx-auto ">Movie Mania </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
