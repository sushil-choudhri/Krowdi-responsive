import React from "react";

function Feedback() {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          width: "18rem",
          padding: "1rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "2rem"
          }}
        >
          <div>
            <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
              Something else?
            </p>
          </div>
          <img src="/assets/que2.svg" alt="" />
        </div>
        <div style={{}}>
          <textarea
            style={{
              width: "100%",
              height: "5rem",
              borderRadius: "10px",
              outline: "none",
              border: "1px solid gray",
              padding: "0.5rem"
            }}
            type="text"
            placeholder="Insert Your Feedback"
          />
        </div>
        <div>
          <button
            style={{
              width: "100%",
              height: "2.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
              backgroundColor: "#4DAAA7",
              color: "white",
              outline: "none",
              border: "none",
              borderRadius: "8px"
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Feedback;
