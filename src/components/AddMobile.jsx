import React from "react";
import { nanoid } from "nanoid";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  } else if (values.price <= 0) {
    errors.price = "Price cannot be negative.";
  }

  return errors;
};
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
    validate,

    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values)
      values.id = nanoid();
      let mobiles = JSON.parse(localStorage.getItem("mobiles")) || [];
      // console.log(mobiles)
      mobiles.push(values);

      localStorage.setItem("mobiles", JSON.stringify(mobiles));
      actions.resetForm();
      alert("Submitted successfully.");
    },
  });

  const classes = {
    formInput: "border border-gray-400 rounded w-full",
    inputAndLabel: "m-2",
    form: "sm:w-1/3 m-auto",
    label: "align-bottom font-light py-1",
    submitButton:
      "bg-indigo-600 rounded text-white px-3 py-1 m-2 text-center justify-end w-24 hover:bg-indigo-500",
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="name">Model</label>
        </div>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className={classes.formInput}
        />

        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="brand">Brand</label>
        </div>
        <input
          id="brand"
          name="brand"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brand}
          className={classes.formInput}
        />
      </div>
      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="price">Price</label>
        </div>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
          className={classes.formInput}
        />

        {formik.errors.price ? <div>{formik.errors.price}</div> : null}
      </div>
      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="color">Color</label>
        </div>
        <input
          id="color"
          name="color"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.color}
          className={classes.formInput}
        />
      </div>
      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="ram">RAM</label>
        </div>
        <input
          id="ram"
          name="ram"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.ram}
          className={classes.formInput}
        />
      </div>
      <div className={classes.inputAndLabel}>
        <div className={classes.label}>
          <label htmlFor="rom">ROM</label>
        </div>
        <input
          id="rom"
          name="rom"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rom}
          className={classes.formInput}
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default withAuthenticationRequired(AddMobile, {
  onRedirecting: () => (
    <div className="m-auto w-1/4 text-indigo-100"> Loading...</div>
  ),
});
