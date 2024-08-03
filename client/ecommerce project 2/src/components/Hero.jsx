import React from "react";
import img from "../assets/search.png";
import heart from "../assets/heart.png";
import cart from "../assets/car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Hero.css";



function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__exclusive">
        <p>Exclusive</p>
      </div>

      <div className="second__hero__container">
        <div className="hero__navigation">
          <a className="hero__home">Home</a>
          <a>Contact</a>
          <a>About</a>
          <a className="sign__hero">Sign Up</a>
        </div>
        <div className="icons__search__hero">
          <input
            className="search__hero"
            type="text"
            placeholder="what are you looking for?"
          />

          <i className="fa-solid fa-magnifying-glass icon__search__hero"></i>
        </div>
      </div>

      <div className="allicon__hero">
        <i className="fa-regular fa-heart"></i>

        <i
          className="fas fa-shopping-cart"
          style={{ fontSize: "16px", color: "black" }}
        ></i>
        <div className="user__icon ">
          <FontAwesomeIcon className="icon__user__hero" icon={faUser} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

