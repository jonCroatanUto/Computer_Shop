import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productList } from "../../apiCall";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
function Home() {
  const [items, setItems] = useState();
  useEffect(() => {
    productList().then((res) => console.log(res));
  }, []);
  const [searcherData, setSearcherData] = useState({
    ProductSearcher: "",
  });

  function setSearcherWord(e) {
    // console.log();
    setSearcherData({
      ...searcherData,
      [e.target.name]: e.target.value,
    });
  }

  const id = "soy un id";
  const { ProductSearcher } = searcherData;
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}></Col>
        <Col xs={12} md={4} lg={4}>
          <InputText
            type="text"
            id="ProductSearcher"
            label="Search a product"
            value={ProductSearcher}
            placeholder="Search a product"
            handleChange={setSearcherWord}
          />
        </Col>
      </Row>
      <Row>
        <Link to={`/details/${id}`}>
          <button>Go to details</button>
        </Link>
      </Row>
    </Container>
  );
}
export default Home;
