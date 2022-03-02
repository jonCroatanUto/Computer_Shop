import React, { useEffect, useState } from "react";

import {
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";
import { useHistory, useLocation, Link } from "react-router-dom";

function NavbarComp() {
  const [productID, setProductId] = useState([""]);
  const location = useLocation();
  const { pathname } = location;
  const [historyNav, setHistoryNav] = useState();

  useEffect(() => {
    console.log(pathname);
    const path = [pathname];
    const Local = localStorage.getItem("paths");
    setHistoryNav(JSON.parse(Local));
    if (Local === null) {
      localStorage.setItem("paths", JSON.stringify(path));
    } else {
      const oldLocal = JSON.parse(Local);
      oldLocal.push(pathname);
      localStorage.setItem("paths", JSON.stringify(oldLocal));
    }

    if (pathname !== "/") {
      const pathnameWithOutSlash = pathname.substring(1);
      const idStartPoint = pathnameWithOutSlash.indexOf("/") + 1;

      const idParam = pathnameWithOutSlash.slice(idStartPoint, -1);
    }
  }, [pathname]);
  const totalProducts = 2;
  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Col xs={12} md={8} lg={10}>
            <Navbar.Brand href="/">Computer Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/details">details</Nav.Link>
              </Nav>

              <NavDropdown title="history navegation" id="basic-nav-dropdown">
                <ul style={{ listStyle: "none" }}>
                  {historyNav ? (
                    <>
                      {historyNav.map((url, index) => {
                        return (
                          <li key={index}>
                            <Link key={index} to={url}>
                              link
                            </Link>
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <div></div>
                  )}
                </ul>
              </NavDropdown>
            </Navbar.Collapse>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <p>Total Products : {totalProducts}</p>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarComp;
