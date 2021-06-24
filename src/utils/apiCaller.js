import axios from "axios";

const apiCaller = (endpoint, method, data) => {
  return axios({
    method: method,
    url: `http://localhost:3000/products/${endpoint}`,
    data: data,
  });
};

export default apiCaller;
