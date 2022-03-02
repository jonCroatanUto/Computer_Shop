import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const id = "soy un id";
  return (
    <>
      <div>i'm Home</div>
      <Link to={`/details/${id}`}>
        <button>Go to details</button>
      </Link>
    </>
  );
}
export default Home;
