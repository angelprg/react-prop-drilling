import React from "react";

const Counter = ({ qty }) => {
  const styleContainer = {
    margin: "5px",
    fontSize: "20px",
  };
  const styleQty = {
    marginLeft: "15px",
    marginRight: "15px",
  };
  return (
    <div style={styleContainer}>
      <button> - </button>
      <span style={styleQty}>{qty}</span>
      <button> + </button>
    </div>
  );
};

export default Counter;
