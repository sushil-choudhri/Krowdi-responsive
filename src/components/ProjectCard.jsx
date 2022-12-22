import React from "react";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "16rem",
          height: "21rem",
          border: "1px solid #4DAAA7",
          padding: "1rem",
          borderRadius: "10px",
          gap: "1rem"
          // opacity: "0.4"
        }}
      >
        <div>
          <div style={{ width: "3rem" }}>
            <img style={{ width: "100%" }} src="/assets/arabic.svg" alt="" />
          </div>
          <p
            style={{
              margin: "1rem 0rem 0.5rem 0rem",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}
          >
            Arabic Sentimental Analysis
          </p>
          <p style={{ fontSize: "0.9rem", color: "gray" }}>
            Sed ut perspiciatis unde omnis iste natus erro sit voluptatem
          </p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "1.1rem", color: "#4DAAA7" }}>
                Limitations:
              </p>
            </div>
            <img src="/assets/que2.svg" alt="" />
          </div>
          <div style={{}}>
            <ul
              style={{
                paddingLeft: "1rem",
                fontSize: "0.9rem",
                color: "gray",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}
            >
              <li>sed ut perspiciatis unde</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>dolor sit amet, consectetur</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            border: "none",
            padding: "4px",
            fontSize: "0.9rem",
            borderRadius: "10px",
            backgroundColor: "#E6F1F1"
          }}
        >
          <p style={{ textAlign: "center", color: "#7C9090" }}>
            As low as 0.4 per word
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
