import React from "react";

const ViewMobile = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>by {props.brand}</div>
      <div>color: {props.color}</div>
      <div>price: {props.price}</div>
      <div>RAM: {props.ram} GB</div>
      <div>ROM: {props.rom} GB</div>
    </div>
  );
};

export default ViewMobile;
