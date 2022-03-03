import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productItemDetails, addItemToCar } from "../../apiCall";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
function Details() {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [loaded, setLoaded] = useState(false);
  function addProduct() {
    const carState = {
      id: id,
      colorCode: 1000,
      storageCode: 2000,
    };
    addItemToCar(carState).then((res) => console.log(res.data.count));
  }
  useEffect(() => {
    productItemDetails(id).then((res) => {
      const { data } = res;

      console.log(data);
      setProductData(data);
      setLoaded(true);
    });
  }, []);
  if (loaded) {
    const {
      imgUrl,
      brand,
      model,
      price,
      cpu,
      ram,
      os,
      displayResolution,
      battery,
      dimentions,
      weight,
    } = productData;
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <img src={imgUrl} alt="product image" />
            </div>
          </Col>
          <Col>
            <Row>
              <ListGroup style={{ width: "25rem", fontSize: "12px" }}>
                <ListGroupItem>{`Marca: ${brand}`}</ListGroupItem>
                <ListGroupItem>{`Modelo: ${model}`}</ListGroupItem>
                <ListGroupItem>{`Precio: ${price}`}</ListGroupItem>
                <ListGroupItem>{`CPU: ${cpu}`}</ListGroupItem>
                <ListGroupItem>{`RAM: ${ram}`}</ListGroupItem>
                <ListGroupItem>{`OS: ${os}`}</ListGroupItem>
                <ListGroupItem>{`Resolution: ${displayResolution}`}</ListGroupItem>
                <ListGroupItem>{`Battery: ${battery}`}</ListGroupItem>
                <ListGroupItem>{`Dimentions: ${dimentions}`}</ListGroupItem>
                <ListGroupItem>{`Weight: ${weight}`}</ListGroupItem>
              </ListGroup>
            </Row>
            <Row>
              <div>
                <img src={imgUrl} alt="product image" />
              </div>
            </Row>
          </Col>
        </Row>
        <button onClick={addProduct}>add product to car</button>
      </Container>
    );
  } else {
    return <div>loading</div>;
  }
}
export default Details;
