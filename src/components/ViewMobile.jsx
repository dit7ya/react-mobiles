import React from "react";

const ViewMobile = (props) => {
  const classes = {
    mobile: "border rounded p-5 my-4 w-96 m-auto",
    model: "text-2xl py-2",
  };
  return (
    <div className={classes.mobile}>
      <div className={classes.model}>{props.name}</div>
      <div className="flex">
        <div className="font-bold w-1/2">Brand</div>
        <div className={classes.brand}>{props.brand}</div>
      </div>
      <div className="flex">
        <div className="font-bold w-1/2">Color</div>
        <div className={classes.color}>{props.color}</div>
      </div>
      <div className="flex">
        <div className="font-bold w-1/2">Price</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className="flex">
        <div className="font-bold w-1/2">RAM</div>
        <div className={classes.ram}>{props.ram} GB</div>
      </div>
      <div className="flex">
        <div className="font-bold w-1/2">ROM</div>
        <div className={classes.rom}>{props.rom} GB</div>
      </div>
    </div>
  );
};

export default ViewMobile;
