import React from "react";
import "./card.css";

function Card() {
  return (
    <>
      <div
        className="selected"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "12rem",
          height: "14rem",
          alignItems: "center",
          borderRadius: "12px",
          padding: "0.5rem",
          position: "relative",
          border: "1px solid #A3D1D2",
          boxShadow: " 0 34px 30px #5763740f"
        }}
      >
        <div>
          <img
            style={{ width: "5rem", padding: "1rem" }}
            src="/assets/text.svg"
            alt="svg"
          />
        </div>
        <p style={{ fontSize: "1.2rem", fontWeight: "600", padding: "0rem" }}>
          Arabic Text
        </p>
        <p style={{ textAlign: "center", marginTop: "1rem", color: "gray" }}>
          asfs adasd asdasd asd a ad as asdsdfsdf{" "}
        </p>

        <div style={{ position: "absolute", right: "1rem" }}>
          <img src="/assets/tick.svg" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "0.5rem", right: "1rem" }}>
          <img src="/assets/que1.svg" alt="" />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "1rem",
            display: "none"
          }}
        >
          <img src="/assets/que2.svg" alt="" />
        </div>
      </div>
    </>
  );
}
export default Card;
