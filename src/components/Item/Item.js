import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Item({ image, model, brand, price }) {
  return (
    <Card style={{ width: "14rem", margin: "20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Producto:{model}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Modelo:{brand}</ListGroupItem>
          <ListGroupItem>Precio:{price}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
export default Item;
