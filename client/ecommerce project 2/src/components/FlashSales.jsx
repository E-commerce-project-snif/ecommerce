import React, { useState, useEffect } from "react";
import ps5 from "../assets/ps5.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // For solid icons
import { faEye } from "@fortawesome/free-solid-svg-icons";
const FlashSales = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <div className="flash__sales__container">
      <div className="header__sales flex items-center mb-4 ">
        <div className="red_mark__sales w-4 h-8 bg-red-500 m-2 "></div>
        <p className="today__sales text-center text-xl font-semibold">
          Today's
        </p>
      </div>
      <div className="timer__sales flex items-end gap-3.5 font-medium ">
        <h3 className="text-3xl">Flash Sales</h3>
        <p>{formatDateTime(currentDateTime)}</p>
      </div>

      <div className="icon__sales flex flex-col content-end">
        <div className="icon__heart text-gray-400  h-6 gap-10">
          <FontAwesomeIcon icon={faHeart} className=" icon__heart " />
          {/* <i className="fas fa-eye "></i> */}
          <FontAwesomeIcon icon={faEye} className="text-gray-400 h-6" />
        </div>
        <div>
          <img className="h-40" src={ps5} />
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
