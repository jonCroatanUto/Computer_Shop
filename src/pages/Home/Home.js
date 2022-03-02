import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../../apiCall";

function Home() {
  function products() {
    productList().then((res) => console.log(res));
  }

  const id = "soy un id";
  return (
    <>
      <div>i'm Home</div>
      <Link to={`/details/${id}`}>
        <button>Go to details</button>
      </Link>
      <button onClick={products}>productlist</button>
    </>
  );
}
export default Home;
