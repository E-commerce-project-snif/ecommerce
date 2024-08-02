import React from "react";
import one from "../assets/111.jpg";
import two from "../assets/222.jpg";
import three from "../assets/333.jpg";
import four from "../assets/444.jpg";
import five from "../assets/555.jpg";
import delivery from "../assets/delivery.png";
import ret from "../assets/return.png";
import heart from "../assets/heart.png";
// import plus from "../assets/plus.png";

function ProductDetails() {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 20px 60px 21px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          width: "1168px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "80px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "68px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "30px",
              minWidth: "455px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                width: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: "138px",
                  // position: "relative",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    // position: "absolute",
                    height: "calc(100% - 24px)",
                    top: "12px",
                    bottom: "12px",
                    left: "24px",
                    maxHeight: "100%",
                    width: "121px",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  alt=""
                  src={five}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: "138px",
                  // position: "relative",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    // position: "absolute",
                    top: "20px",
                    left: "29px",
                    width: "112px",
                    height: "97px",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                  alt=""
                  src={four}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: "138px",
                  // position: "relative",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    // position: "absolute",
                    top: "22px",
                    left: "18px",
                    width: "134px",
                    height: "94px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  alt=""
                  src={three}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: "138px",
                  // position: "relative",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    // position: "absolute",
                    top: "16px",
                    left: "24px",
                    width: "122px",
                    height: "106px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  alt=""
                  src={two}
                />
              </div>
            </div>
            <div
              style={{
                height: "600px",
                flex: "1",
                // position: "relative",
                borderRadius: "4px",
                backgroundColor: "#f5f5f5",
                overflow: "hidden",
                maxWidth: "calc(100% - 200px)",
              }}
            >
              <img
                style={{
                  // position: "absolute",
                  top: "154px",
                  left: "27px",
                  width: "446px",
                  height: "315px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src={one}
              />
            </div>
          </div>
          <div
            style={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "40px",
              minWidth: "400px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
                maxWidth: "100%",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  // position: "relative",
                  fontSize: "inherit",
                  letterSpacing: "0.03em",
                  lineHeight: "24px",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                Havic HV G-92 Gamepad
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.5)",
                  fontFamily: "Poppins",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                    color: "rgba(0, 255, 102, 0.6)",
                  }}
                >
                  {/* <div
                    style={{
                      height: "17px",
                      width: "1px",
                      // position: "relative",
                      borderRight: "1px solid #000",
                      boxSizing: "border-box",
                      opacity: "0.5",
                    }}
                  /> */}
                  <div
                    style={{
                      // position: "relative",
                      lineHeight: "21px",
                      display: "inline-block",
                      minWidth: "55px",
                    }}
                  >
                    In Stock
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 8px",
                }}
              >
                <div
                  style={{
                    // position: "relative",
                    letterSpacing: "0.03em",
                    lineHeight: "24px",
                    display: "inline-block",
                    minWidth: "97px",
                    whiteSpace: "nowrap",
                  }}
                >
                  $192.00
                </div>
              </div>
              <div
                style={{
                  width: "373px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 8px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    // position: "relative",
                    lineHeight: "21px",
                    display: "inline-block",
                    maxWidth: "100%",
                  }}
                >{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 7px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    flex: "1",
                    // position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                  }}
                  loading="lazy"
                  alt=""
                  src="/underline1.svg"
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 1px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    gap: "18px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      gap: "9px",
                      minWidth: "221px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "24px",
                        minWidth: "159px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "24px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "23px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "32px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                            fontSize: "14px",
                            fontFamily: "Poppins",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 6px 0px 0px",
                              fontSize: "20px",
                              fontFamily: "Inter",
                            }}
                          >
                            <div
                              style={{
                                // position: "relative",
                                letterSpacing: "0.03em",
                                lineHeight: "20px",
                                display: "inline-block",
                                minWidth: "49px",
                              }}
                            >
                              Size:
                            </div>
                          </div>
                          <div
                            style={{
                              height: "34px",
                              width: "34px",
                              borderRadius: "4px",
                              border: "1px solid rgba(0, 0, 0, 0.5)",
                              boxSizing: "border-box",
                              overflow: "hidden",
                              flexShrink: "0",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 7px",
                            }}
                          >
                            <div
                              style={{
                                // position: "relative",
                                lineHeight: "21px",
                                fontWeight: "500",
                                display: "inline-block",
                                minWidth: "18px",
                              }}
                            >
                              XS
                            </div>
                          </div>
                          <div
                            style={{
                              height: "34px",
                              width: "34px",
                              borderRadius: "4px",
                              border: "1px solid rgba(0, 0, 0, 0.5)",
                              boxSizing: "border-box",
                              overflow: "hidden",
                              flexShrink: "0",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 11px 5px 12px",
                            }}
                          >
                            <div
                              style={{
                                // position: "relative",
                                lineHeight: "21px",
                                fontWeight: "500",
                                display: "inline-block",
                                minWidth: "9px",
                              }}
                            >
                              S
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          fontFamily: "Poppins",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            borderRadius: "4px 0px 0px 4px",
                            border: "1px solid rgba(0, 0, 0, 0.5)",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "7px 15px",
                            fontSize: "large",
                          }}
                        >
                          -
                          <div
                            style={{
                              height: "24px",
                              width: "24px",
                              // position: "relative",
                              overflow: "hidden",
                              flexShrink: "0",
                            }}
                          >
                            <img
                              style={{
                                // position: "absolute",
                                height: "6.25%",
                                width: "66.67%",
                                top: "50%",
                                right: "16.67%",
                                bottom: "43.75%",
                                left: "16.67%",
                                maxWidth: "100%",
                                overflow: "hidden",
                                maxHeight: "100%",
                              }}
                              alt=""
                              src="/vector-510.svg"
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "6px 34px",
                            flexShrink: "0",
                            // zIndex: "1",
                            marginLeft: "-1px",
                          }}
                        >
                          <div
                            style={{
                              // position: "relative",
                              lineHeight: "28px",
                              fontWeight: "500",
                              display: "inline-block",
                              minWidth: "12px",
                            }}
                          >
                            2
                          </div>
                        </div>
                        {/* <img
                          style={{
                            height: "34px",
                            width: "31px",
                            position: "relative",
                            borderRadius: "0px 4px 4px 0px",
                            overflow: "hidden",
                            flexShrink: "0",
                            minHeight: "44px",
                            zIndex: "2",
                            marginLeft: "-1px",
                          }}
                          loading="lazy"
                          alt=""
                          src=""
                         
                        /> */}
                        <button
                          className="bg-red
                          -600 text-white text-base p-2"
                          style={{
                            padding: "0px 11px",
                            color: "white",
                            borderColor: "grey",
                            border: "1px solid color: grey",
                            position: "absolute",
                            height: "44px",
                            backgroundColor: "#db4444",
                            marginLeft: "100px",
                            width: "40px",
                            fontSize: "xx-large",
                            zIndex: "-2",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "24px",
                        minWidth: "112px",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    >
                      <div
                        style={{
                          width: "128px",
                          height: "32px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "16px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "4px",
                            backgroundColor: "#db4444",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "6px 9px 5px 10px",
                            color: "#fafafa",
                          }}
                        >
                          <div
                            style={{
                              // position: "relative",
                              lineHeight: "21px",
                              fontWeight: "500",
                              display: "inline-block",
                              minWidth: "13px",
                            }}
                          >
                            M
                          </div>
                        </div>
                        <div
                          style={{
                            height: "34px",
                            flex: "0.4375",
                            borderRadius: "4px",
                            border: "1px solid rgba(0, 0, 0, 0.5)",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "6px 12px 5px 13px",
                          }}
                        >
                          <div
                            style={{
                              // position: "relative",
                              lineHeight: "21px",
                              fontWeight: "500",
                              display: "inline-block",
                              minWidth: "7px",
                            }}
                          >
                            L
                          </div>
                        </div>
                        <div
                          style={{
                            height: "34px",
                            flex: "1",
                            borderRadius: "4px",
                            border: "1px solid rgba(0, 0, 0, 0.5)",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "6px 8px",
                          }}
                        >
                          <div
                            style={{
                              // position: "relative",
                              lineHeight: "21px",
                              fontWeight: "500",
                              display: "inline-block",
                              minWidth: "16px",
                            }}
                          >
                            XL
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          padding: "0px 0px 0px 7px",
                        }}
                      >
                        <button
                          className="bg-red-600 text-white text-base p-2 "
                          style={{
                            width: "165px",
                            height: "44px",
                            textAlign: "center",
                          }}
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      padding: "0px 0px 2px",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        // position: "relative",
                        borderRadius: "4px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      loading="lazy"
                      alt=""
                      src={heart}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                boxSizing: "border-box",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "22px 0px",
                gap: "15.5px",
                maxWidth: "100%",
                fontSize: "16px",
                fontFamily: "Poppins",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 16px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        // position: "relative",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      loading="lazy"
                      alt=""
                      src={delivery}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        // position: "relative",
                        lineHeight: "24px",
                        fontWeight: "500",
                        display: "inline-block",
                        minWidth: "103px",
                      }}
                    >
                      Free Delivery
                    </div>
                    <div
                      style={{
                        // position: "relative",
                        fontSize: "12px",
                        textDecoration: "underline",
                        lineHeight: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
                src="/underline-12.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        // position: "relative",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      loading="lazy"
                      alt=""
                      src={ret}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        // position: "relative",
                        lineHeight: "24px",
                        fontWeight: "500",
                        display: "inline-block",
                        minWidth: "122px",
                      }}
                    >
                      Return Delivery
                    </div>
                    <div
                      style={{
                        // position: "relative",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "500",
                      }}
                    >
                      {`Free 30 Days Delivery Returns. `}
                      <span style={{ textDecoration: "underline" }}>
                        Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
