import React from "react";
import { Link } from "react-router-dom";
import { productList, productItemDetails, addItemToCar } from "../../apiCall";
function Home() {
  function products() {
    productList().then((res) => console.log(res));
  }
  function productDetails() {
    productItemDetails("ZmGrkLRPXOTpxsU4jjAcv").then((res) => console.log(res));
  }
  function addProduct() {
    const carState = {
      id: "ZmGrkLRPXOTpxsU4jjAcv",
      colorCode: 1000,
      storageCode: 2000,
    };
    addItemToCar(carState).then((res) => console.log(res.data.count));
  }

  const id = "soy un id";
  return (
    <>
      <div>i'm Home</div>
      <Link to={`/details/${id}`}>
        <button>Go to details</button>
      </Link>
      <button onClick={products}>productlist</button>
      <button onClick={productDetails}>product details</button>
      <button onClick={addProduct}>add product to car</button>
    </>
  );
}
export default Home;
