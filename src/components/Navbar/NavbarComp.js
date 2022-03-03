import React, { useContext, useEffect, useState } from "react";

import {
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";
import { useHistory, useLocation, Link, useParams } from "react-router-dom";
import StorageContext from "../../context";
import { productItemDetails } from "../../apiCall";
function NavbarComp({ name }) {
  const [productID, setProductId] = useState([""]);
  const location = useLocation();
  const { pathname } = location;
  const [historyNav, setHistoryNav] = useState();
  const [carItemsStorage, setCarItemsStorage] = useState(null);
  const { readLocalStorage } = useContext(StorageContext);

  const { id } = useParams();
  useEffect(() => {
    const Local = localStorage.getItem("paths");
    setHistoryNav(JSON.parse(Local));
    if (pathname !== "/") {
      const pathnameWithOutSlash = pathname.substring(1);
      const idStartPoint = pathnameWithOutSlash.indexOf("/") + 1;

      const idParam = pathnameWithOutSlash.slice(idStartPoint, -1);
      const path = [{ path: pathname, name: `productDetail` }];

      if (Local === null) {
        localStorage.setItem("paths", JSON.stringify(path));
      } else {
        const oldLocal = JSON.parse(Local);
        oldLocal.push({ path: pathname, name: `productDetail` });
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
                  <ul style={{ listStyle: "none" }}>
                    {historyNav ? (
                      <>
                        {historyNav.map((itemPlace, index) => {
                          const { path, name } = itemPlace;
                          return (
                            <li key={index}>
                              <Link key={index} to={path}>
                                {name}
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
