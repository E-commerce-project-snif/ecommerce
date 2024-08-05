import axios from "axios";


export const getCategories = async () => {
  return axios
    .get("http://localhost:3000/categories/getcat")
    .then((res) => {
    
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
