import React from "react";
import Counter from "./Counter";
import Like from './Like';

const Card = ({ title, qty, like, onLikeClick }) => {

  return (
    <div style={{ border: "1px solid gray", margin: "5px" }}>
      <Like like={like} onLikeClick={onLikeClick}/>
      <h2>{title}</h2>
      <Counter qty={qty} />
    </div>
  );
};

export default Card;
