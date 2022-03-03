import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productList } from "../../apiCall";
import { Container, Row, Col } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
import Item from "../../components/Item";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
function Home() {
  const [itemsToSearch, setItemsToSearch] = useState();
  const [items, setItems] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [isloaded, setisLoaded] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    productList().then((res) => {
      const { data } = res;
      console.log(data);
      setItems(data);
      setItemsToSearch(data);
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
  function filterItems(e) {
    e.preventDefault();
    let itemsFiltred = [];
    itemsFiltred = itemsToSearch.filter(
      (item) => item.model === ProductSearcher || item.brand === ProductSearcher
    );
    if (itemsFiltred.length === 0) {
      setSearcherData({ ProductSearcher: "no results" });
      setItems(itemsToSearch);
    } else {
      setItems(itemsFiltred);
    }
  }
  const { ProductSearcher } = searcherData;
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}></Col>
        <Col xs={12} md={4} lg={4}>
          <form onSubmit={filterItems}>
            <Row>
              <Col>
                <InputText
                  type="text"
                  id="ProductSearcher"
                  label="Search a product"
                  value={ProductSearcher}
                  placeholder="Search a product"
                  handleChange={setSearcherWord}
                />
              </Col>
              <Col>
                <button
                  style={{
                    marginTop: "30px",
                    border: "none",
                    background: "transparent",
                  }}
                  type="submit"
                >
                  <PersonSearchIcon />
                </button>
              </Col>
            </Row>
          </form>
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
