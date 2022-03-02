import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productItemDetails, addItemToCar } from "../../apiCall";
function Details() {
  const { id } = useParams();
  function addProduct() {
    const carState = {
      id: "ZmGrkLRPXOTpxsU4jjAcv",
      colorCode: 1000,
      storageCode: 2000,
    };
    addItemToCar(carState).then((res) => console.log(res.data.count));
  }
  useEffect(() => {
    productItemDetails(id).then((res) => console.log(res));
  }, []);
  return (
    <>
      <div>i'm Details</div>
      <button onClick={addProduct}>add product to car</button>
    </>
  );
}
export default Details;
