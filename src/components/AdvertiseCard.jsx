import React from "react";
import "./AdvertiseCard.css";

function AdvertiseCard() {
  return (
    <>
      <div
        style={{
          border: "1px solid lightgray",
          width: "15rem",
          height: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8F9FC",
          borderRadius: "1rem",
          alignItems: "center",
          paddingTop: "2rem"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            Available Funds:
          </p>
          <p
            style={{
              fontSize: "3rem",
              color: "#4DAAA7",
              textShadow: "0px 1px, 1px 0px, 1px 0px",
              fontWeight: "900"
            }}
          >
            $500.56
          </p>
        </div>
        <img src="/assets/group-7@2x.svg" alt="" />
      </div>
    </>
  );
}
export default AdvertiseCard;
