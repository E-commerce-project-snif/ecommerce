import React from "react";
import img from "../assets/search.png";
import heart from "../assets/heart.png";
import cart from "../assets/car.png";

function Hero() {
  return (
    <div className="Hero__container " style={{
      backgroundColor:'white',
   paddingTop:'13px' ,
   paddingBottom:'13px'  }}>
      <div
        style={{
          marginLeft: "115px",
          marginTop: "40px",
          width: "1170px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          lineHeight: "normal",
          letterSpacing: "normal",
          gap: "20px",
          textAlign: "left",
          fontSize: "24px",
          color: "#000",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            width: "675px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "7px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              maxWidth: "100%",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 0px 0px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  position: "relative",
                  letterSpacing: "0.03em",
                  lineHeight: "24px",
                  fontWeight: "700",
                  color: "inherit",
                  display: "inline-block",
                  minWidth: "119px",
                  flexShrink: "0",
                  whiteSpace: "nowrap",
                }}
              >
                Exclusive
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "48px",
                maxWidth: "100%",
                textAlign: "center",
                fontSize: "16px",
                fontFamily: "Poppins",
              }}
            >
              <div
                style={{
                  height: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 0px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    lineHeight: "24px",
                    color: "inherit",
                    display: "inline-block",
                    minWidth: "48px",
                  }}
                >
                  Home
                </a>
                <img
                  style={{ width: "48px", height: "1px", position: "relative" }}
                  alt=""
                  src="/underline.svg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    lineHeight: "24px",
                    color: "inherit",
                    display: "inline-block",
                    minWidth: "66px",
                  }}
                >
                  Contact
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    lineHeight: "24px",
                    color: "inherit",
                    display: "inline-block",
                    minWidth: "48px",
                  }}
                >
                  About
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  cursor: "pointer",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    lineHeight: "24px",
                    color: "inherit",
                    display: "inline-block",
                    minWidth: "61px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "347px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "24px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              borderRadius: "4px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "7px 12px 7px 20px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "34px",
              }}
            >
              <input
                style={{
                  width: "calc(100% - 24px)",
                  border: "none",
                  outline: "none",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  backgroundColor: "transparent",
                  height: "18px",
                  flex: "1",
                  position: "relative",
                  lineHeight: "18px",
                  color: "rgba(0, 0, 0, 0.5)",
                  textAlign: "left",
                  display: "inline-block",
                  minWidth: "92px",
                  whiteSpace: "nowrap",
                  padding: "0",
                }}
                placeholder="What are you looking for?"
                type="text"
              />
              <img
                style={{
                  height: "24px",
                  width: "24px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src={img}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <img
              style={{
                height: "32px",
                width: "32px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                minHeight: "32px",
              }}
              loading="lazy"
              alt=""
              src={heart}
            />
            <img
              style={{
                height: "32px",
                width: "32px",
                position: "relative",
                minHeight: "32px",
                cursor: "pointer",
              }}
              loading="lazy"
              alt=""
              src={cart}
            />
            <img
              style={{
                height: "32px",
                width: "32px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                minHeight: "32px",
              }}
              alt=""
              src={heart}
            />
          </div>
        </div>
      </div>
      <hr
        style={{
          position: "sticky",
          bottom: "0",
          marginTop: "20px",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Hero;
