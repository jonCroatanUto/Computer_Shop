import React, { useContext, useEffect, useState } from "react";

import {
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Nav,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import StorageContext from "../../context";

function NavbarComp() {
  const location = useLocation();
  const { pathname } = location;
  const [historyNav, setHistoryNav] = useState();
  const [carItemsStorage, setCarItemsStorage] = useState(null);
  const { readLocalStorage } = useContext(StorageContext);

  useEffect(() => {
    const Local = localStorage.getItem("paths");
    setHistoryNav(JSON.parse(Local));
    if (pathname !== "/") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const model = urlParams.get("model");

      const path = [{ path: pathname, name: `Detail: ${model}` }];

      if (Local === null) {
        localStorage.setItem("paths", JSON.stringify(path));
      } else {
        const oldLocal = JSON.parse(Local);
        oldLocal.push({ path: pathname, name: `Detail: ${model}` });
        localStorage.setItem("paths", JSON.stringify(oldLocal));
      }
    } else {
      const path = [{ path: pathname, name: `HOME` }];
      if (Local === null) {
        localStorage.setItem("paths", JSON.stringify(path));
      } else {
        const oldLocal = JSON.parse(Local);
        oldLocal.push({ path: pathname, name: "HOME" });
        localStorage.setItem("paths", JSON.stringify(oldLocal));
      }
    }
  }, [pathname]);

  useEffect(() => {
    setCarItemsStorage(JSON.parse(localStorage.getItem("carItems")));
  }, [readLocalStorage]);

  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Col xs={12} md={8} lg={10}>
            <Navbar.Brand href="/">Computer Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {pathname === "/" ? (
                  <Nav.Link>HOME</Nav.Link>
                ) : (
                  <Nav.Link>DETAILS</Nav.Link>
                )}
                <NavDropdown title="history navegation" id="basic-nav-dropdown">
                  <ListGroup>
                    {historyNav ? (
                      <div style={{ maxHeight: "200px", overflow: "scroll" }}>
                        {historyNav.map((itemPlace, index) => {
                          const { path, name } = itemPlace;
                          return (
                            <ListGroupItem key={index}>
                              <Link
                                style={{ textDecoration: "none" }}
                                key={index}
                                to={`${path}?model=${name}`}
                              >
                                {name}
                              </Link>
                            </ListGroupItem>
                          );
                        })}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </ListGroup>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <p>
              Total Products : {carItemsStorage === null ? 0 : carItemsStorage}
            </p>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarComp;
