import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import Exclusive from "./Exclusive";
import FlashSales from "./FlashSales";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
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
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <div>
      <Exclusive />
      <hr />
      <FlashSales />
      <hr />
      <div className="Home__container">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="second__sales__container">
            <div className="icon__sales ">
              <div className="image__pourcentage__sales">
                <div className="poucentage__sales">-40%</div>
                <img className="img__sales" src={product.images} />
                <div className="icons">
                  <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                  <FontAwesomeIcon icon={faEye} className="icon__eye" />
                </div>
              </div>
            </div>
            <div className="detail__sales">
              <span className="HAVIT__sales">{product.productname}</span>
              <span className="price__details">120$</span>
              <div className="allStars">
                <span className="star">⭐⭐⭐⭐</span>
                <p className="grey__star">⭐</p>
              </div>
              <button className="btn__home">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {products.length > visibleCount && (
        <button onClick={showMore} className="btn__showMore">
          Show More
        </button>
      )}
    </div>
  );
}

export default Home;
