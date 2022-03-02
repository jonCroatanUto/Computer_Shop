import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productList } from "../../apiCall";

import InputText from "../../components/InputText/InputText";
function Home() {
  const [searcherData, setSearcherData] = useState({
    ProductSearcher: "",
  });
  function products() {
    productList().then((res) => console.log(res));
  }
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
    <>
      <InputText
        type="text"
        id="ProductSearcher"
        label="Search a product"
        value={ProductSearcher}
        placeholder="Search a product"
        handleChange={setSearcherWord}
      />
      <div>i'm Home</div>
      <Link to={`/details/${id}`}>
        <button>Go to details</button>
      </Link>
      <button onClick={products}>productlist</button>
    </>
  );
}
export default Home;
