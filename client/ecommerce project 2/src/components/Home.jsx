import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import Exclusive from "./Exclusive";
import FlashSales from "./FlashSales";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faWatchSmart } from '@fortawesome/free-solid-svg-icons'
// import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
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
      <div>
        <Exclusive />
        <hr />
        <FlashSales />
        <hr />
      </div>

      <div className="categories__home">
        <div className="red__categories">
          <div className="red__mark__categorie"></div>
          <div className="categories">Categorie</div>
        </div>
        <div className="categories__product__home ">Browse By Category</div>
        <div className="all__icon__home">
          {/* 1st icon */}
          <div className="icon__home__container">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon-with-border icon__phone"
            />
            <p className="phone">Phone</p>
          </div>
          {/* 2nd icon */}
          <div className="icon__home__container">
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon-with-border icon__pc "
            />
            <p className="phone">PC</p>
          </div>
          {/* 3nd icon */}
          <div className="icon__home__container">
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon-with-border icon__pc "
            />
            <p className="phone">PC</p>
          </div>
          {/* 4nd icon */}
          <div className="icon__home__container">
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon-with-border icon__pc "
            />
            <p className="phone">PC</p>
          </div>
        </div>
      </div>
      <div className="header__home__container">
        <div className="header__home">
          <div className="red_mark__home"></div>
          <p className="our__product__home ">Explore Our Products</p>
        </div>
      </div>

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

              <span className="price__details">{product.price}$ </span>
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
