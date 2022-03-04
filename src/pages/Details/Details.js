import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { productItemDetails, addItemToCar } from "../../apiCall";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Select from "react-select";
import StorageContext from "../../context";
function Details() {
  const { toogleReadLocalStorage } = useContext(StorageContext);
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [loaded, setLoaded] = useState(false);

  const [carState, setCarState] = useState({
    id: id,
    colorCode: null,
    storageCode: null,
  });

  function addProduct(e) {
    e.preventDefault();

    addItemToCar(carState).then((res) => {
      const productsAlreadyAdded = JSON.parse(localStorage.getItem("carItems"));
      if (productsAlreadyAdded !== null) {
        const totalPorducts = productsAlreadyAdded + res.data.count;
        localStorage.setItem("carItems", JSON.stringify(totalPorducts));
      } else {
        localStorage.setItem("carItems", JSON.stringify(res.data.count));
        setTimeout(() => {
          localStorage.removeItem("carItems");
          toogleReadLocalStorage();
        }, 3600000);
      }
      toogleReadLocalStorage();
    });
  }
  useEffect(() => {
    productItemDetails(id).then((res) => {
      const { data } = res;

      setProductData(data);
      setLoaded(true);
    });
  }, [id]);
  function choseOptionColor(e) {
    setCarState({
      ...carState,
      colorCode: e.value,
    });
  }

  function choseOptionStorage(e) {
    setCarState({
      ...carState,
      storageCode: e.value,
    });
  }

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
      options,
    } = productData;
    const colors = [];
    const storages = [];
    function colorsOptions(colorName, colorCode) {
      console.log(colorName);
      colors.push({ value: colorCode, label: colorName });
    }
    function storageOptions(storageName, storageCode) {
      storages.push({ value: storageCode, label: storageName });
    }
    options.colors.forEach((color) => {
      const { name, code } = color;

      colorsOptions(name, code);
    });
    options.storages.forEach((storage) => {
      const { name, code } = storage;

      storageOptions(name, code);
    });

    const customStyles = {
      option: (provided) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: "green",
        padding: 20,
      }),
    };

    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={6} className="text-center">
            <div>
              <img style={{ width: "50%" }} src={imgUrl} alt="product image" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Row>
              <h1>PRODUCT DETAILS</h1>
              <ListGroup style={{ fontSize: "12px" }}>
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
              <form style={{ marginTop: "25px" }} onSubmit={addProduct}>
                <h1>SELECT:</h1>
                <h3>colors</h3>
                <Select
                  width="500px"
                  menuColor="red"
                  styles={customStyles}
                  onChange={choseOptionColor}
                  options={colors}
                />
                <h3>storage</h3>
                <Select
                  width="500px"
                  menuColor="red"
                  styles={customStyles}
                  onChange={choseOptionStorage}
                  options={storages}
                />

                <Button type="submit">add product</Button>
              </form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div>loading</div>;
  }
}
export default Details;
