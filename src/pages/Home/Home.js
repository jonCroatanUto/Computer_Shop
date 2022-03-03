import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productList } from "../../apiCall";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
import Item from "../../components/Item";
function Home() {
  const [items, setItems] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [isloaded, setisLoaded] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    productList().then((res) => {
      const { data } = res;
      setItems(data);
      setIsLoading(false);
      setisLoaded(true);
    });
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
        {isloaded ? (
          items.map((item, index) => {
            const { id, brand, imgUrl, model, price } = item;
            return (
              <Col key={index} xs={10} md={4} lg={3}>
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  to={`/details/${id}`}
                >
                  <Item
                    key={index}
                    image={imgUrl}
                    model={model}
                    brand={brand}
                    price={price}
                  />
                </Link>
              </Col>
            );
          })
        ) : (
          <div></div>
        )}
      </Row>
    </Container>
  );
}
export default Home;
