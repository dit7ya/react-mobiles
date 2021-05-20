import React from "react";
import { nanoid } from "nanoid";

import { useFormik } from "formik";

const AddMobile = () => {
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      brand: "",
      price: "",
      color: "",
      ram: "",
      rom: "",
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values)
      values.id = nanoid();
      let mobiles = JSON.parse(localStorage.getItem("mobiles")) || [];
      // console.log(mobiles)
      mobiles.push(values);

      localStorage.setItem("mobiles", JSON.stringify(mobiles));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Mobile Name</label>

      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="brand">Brand</label>
      <input
        id="brand"
        name="brand"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.brand}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <label htmlFor="color">Color</label>
      <input
        id="color"
        name="color"
        type="color"
        onChange={formik.handleChange}
        value={formik.values.color}
      />

      <label htmlFor="ram">RAM</label>
      <input
        id="ram"
        name="ram"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.ram}
      />
      <label htmlFor="rom">ROM</label>
      <input
        id="rom"
        name="number"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.rom}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMobile;
