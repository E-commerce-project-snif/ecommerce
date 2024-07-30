import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="navbar__container">
      <span className="navbar__span">
        Summer Sales for all Swim Suits and Free Express Delivery-off 50%!
      </span>
      <p className="navbar__shopnow">shopNow</p>
      <p className="navbar__langage">English</p>
      <div style={{ fontSize: "12px", color: "white" }}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default NavBar;
