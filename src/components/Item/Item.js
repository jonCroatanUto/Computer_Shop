import React from "react";
import { Card } from "react-bootstrap";

function Item(){
    return(
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
  
          <button className="itemButtons" >
            <DeleteIcon style={{ color: "red" }} />
          </button>
          <button className="itemButtons">
            <EditIcon style={{ color: "green" }} />
          </button>
        </Card.Body>
      </Card>
    )
}
export default Item;