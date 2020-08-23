import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        width: 150,
        height: 90,
        border: "2px solid #ccc",
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        margin: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <h5 style={{ width: 130, textAlign: "center" }}>{props.totalValue}</h5>
        <h6 style={{ marginTop: 20 }}>{props.month}</h6>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h6 style={{ marginLeft: 15 }}>{props.dividends}</h6>
        <h6 style={{ marginLeft: 15 }}>
          {props.percentage !== undefined ? `${props.percentage}%` : "0.00%"}
        </h6>
      </div>
    </div>
  );
};

export default Card;
