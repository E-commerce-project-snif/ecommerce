import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product.productname}</div>
      ))}
    </div>
  );
}

export default Home;
