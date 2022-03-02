import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function Details() {
  const { id } = useParams();
  useEffect(() => {
    console.log("id of selected product--->", id);
  }, []);
  return <div>i'm Details</div>;
}
export default Details;
