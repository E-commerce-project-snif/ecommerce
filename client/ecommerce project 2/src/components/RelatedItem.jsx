import React from "react";
import one from "../assets/111.jpg";

function RelatedItem() {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(50% - 90px)",
        left: "calc(50% - 95px)",
        width: "190px",
        height: "180px",
        overflow: "hidden",
        zIndex: "1",
      }}
    >
      <img
        alt=""
        src={one}
        style={{
          position: "absolute",
          height: "100%",
          top: "0px",
          bottom: "0px",
          left: "41px",
          maxHeight: "100%",
          width: "107px",
          objectFit: "cover",
          ...one,
        }}
      />
    </div>
  );
}

export default RelatedItem;
