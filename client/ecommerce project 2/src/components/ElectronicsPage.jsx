import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

function ElectronicsPage() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        const filteredProducts = res.filter(
          (elec) => elec.Category.categoryName === "electronics"
        );
        console.log(filteredProducts);
        setElectronics(filteredProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <>
      <div className="Home__container">
        {electronics.length > 0 ? (
          electronics.map((elec) => (
            <div key={elec.id} className="second__sales__container">
              <div className="icon__sales">
                <div className="image__pourcentage__sales">
                  <div className="poucentage__sales">-40%</div>
                  <img className="img__sales" src={elec.images[0]} alt="" />
                  <div className="icons">
                    <FontAwesomeIcon icon={faHeart} className="icon__heart" />
                    <FontAwesomeIcon icon={faEye} className="icon__eye" />
                  </div>
                </div>
              </div>
              <div className="detail__sales">
                <span className="HAVIT__sales">{elec.productname}</span>
                <span className="price__details">{elec.price}$</span>
                <div className="allStars">
                  <span className="star">⭐⭐⭐⭐</span>
                  <p className="grey__star">⭐</p>
                </div>
                <button className="btn__home">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No electronics found.</p>
        )}
      </div>
    </>
  );
}

export default ElectronicsPage;
