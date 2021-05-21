import React, { useState } from "react";
import ViewMobile from "./ViewMobile";
import FilterPrice from "./filters/FilterPrice";

const ViewList = () => {
  let mobiles = JSON.parse(localStorage.getItem("mobiles"));
  let [priceRange, setPriceRange] = useState([0, 1000000]);

  const handleChangePriceRange = (vals) => {
    console.log(vals);
    setPriceRange(vals);
  };

  if (!mobiles) {
    return <div>No mobiles to display yet.</div>;
  }

  return (
    <div>
      <div className="border rounded p-4 m-12 ">
        <div>
          <FilterPrice handleChangePriceRange={handleChangePriceRange} />
        </div>
        {mobiles
          .filter((mobile) => {
            return (
              mobile.price <= priceRange[1] && mobile.price >= priceRange[0]
            );
          })
          .map((mobile) => (
            <ViewMobile
              key={mobile.id}
              name={mobile.name}
              brand={mobile.brand}
              color={mobile.color}
              price={mobile.price}
              ram={mobile.ram}
              rom={mobile.rom}
            />
          ))}
      </div>
    </div>
  );
};

export default ViewList;
