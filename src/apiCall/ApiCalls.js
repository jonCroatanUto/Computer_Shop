import axios from "axios";
const { REACT_APP_SERVER_LOCATION } = process.env;
export async function productList() {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_LOCATION}api/product`,
  });
}
export async function productItemDetails(id) {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_LOCATION}api/product/${id}`,
  });
}
export async function addItemToCar({ id, colorCode, storageCode }) {
  return axios({
    method: "POST",
    url: `${REACT_APP_SERVER_LOCATION}api/cart`,
    data: {
      id: id,
      colorCode: colorCode,
      storageCode: storageCode,
    },
  });
}
