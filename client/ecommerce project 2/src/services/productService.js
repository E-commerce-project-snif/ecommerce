import axios from "axios";

export const getAllProduct = async () => {
  return axios
    .get("http://localhost:3000/products/getAll")
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const addProducts = async (
  productname,
  description,
  images,
  price,
  categoryId,
  availability,
  favoris,
  userId
) => {
  return axios
    .post("http://localhost:3000/products/add", {
      productname,
      description,
      images,
      price,
      categoryId,
      availability,
      favoris,
      userId
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const deleteProduct = async (id) => {
  return axios
    .delete(`http://localhost:3000/products/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
export const updateProduct = async (
  id,
  productname,
  images,
  price,
  availability,
  favoris
) => {
  return axios
    .put(`http://localhost:5000/products/update/${id}`, {
      productname,
      images,
      price,
      availability,
      favoris,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getProductsByUserId = async (id) => {
  return axios
    .get(`http://localhost:3000/products/user/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
