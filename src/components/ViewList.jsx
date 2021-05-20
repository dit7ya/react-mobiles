import React from "react";
import ViewMobile from "./ViewMobile";

const ViewList = () => {
  let mobiles = JSON.parse(localStorage.getItem("mobiles"));
  if (!mobiles) {
    return <div>No mobiles to display yet.</div>;
  }

  return mobiles.map((mobile) => (
    <ViewMobile
      key={mobile.id}
      name={mobile.name}
      brand={mobile.brand}
      color={mobile.color}
      price={mobile.price}
      ram={mobile.ram}
      rom={mobile.rom}
    />
  ));
};

export default ViewList;

