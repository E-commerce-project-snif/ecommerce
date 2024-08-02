import React from "react";
import ps5 from "../assets/ps5.png";

function ProductFlashSales() {
  return (
    <div>
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "270px",
            height: "250px",
            border: "2px  black",
            marginLeft: "100px",
            marginTop: "50px",
          }}
        >
          <div style={{ position: "absolute", marginLeft: "10px" }}>
            <p>
              <mark
                style={{
                  backgroundColor: "red ",
                  color: "white",
                  borderRadius: "5px",
                  padding: "2px 5px",
                }}
              >
                -40%
              </mark>
            </p>
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              marginLeft: "223px",
              marginTop: "09px",
            }}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-favorite-icon-png-image_323833.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              marginLeft: "223px",
              marginTop: "49px",
            }}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-view-icon-png-image_5196447.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "190px",
              border: "1px grey",
              backgroundColor: "#EEEEEE",
            }}
          >
            <img
              src={ps5}
              alt="PlayStation 5"
              style={{
                position: "absolute",
                width: "165px",
                marginLeft: "41px",
                marginTop: "9px",
              }}
            />
          </div>
          <div style={{ position: "relative", padding: "10px" }}>
            <h3 style={{ marginTop: "-8px", fontSize: "small" }}>
              This is the item
            </h3>
            <div style={{ color: "red", marginTop: "-13px" }}>
              <p>
                <b
                  style={{ color: "red", marginTop: "7px", fontSize: "small" }}
                >
                  $160
                </b>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                marginTop: "-53px",
                marginLeft: "43px",
              }}
            >
              <p>
                <s style={{ color: "grey", fontSize: "small" }}> $130</s>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFlashSales;
