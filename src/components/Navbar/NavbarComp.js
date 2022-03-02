import React from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";

function NavbarComp() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Computer Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/details">details</Nav.Link>

              <NavDropdown title="Identify" id="basic-nav-dropdown">
                <NavDropdown.Item>Home</NavDropdown.Item>
                <NavDropdown.Item>Details</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarComp;