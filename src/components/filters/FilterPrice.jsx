import React from "react";
import { useFormik } from "formik";

const FilterPrice = (props) => {
  const formik = useFormik({
    initialValues: {
      min: 0,
      max: 100000,
    },

    onSubmit: (values) => {
      props.handleChangePriceRange([values.min, values.max]);
    },
  });

  const classes = {
    formInput: "border border-gray-400 rounded w-24 h-6 mx-3",
    inputAndLabel: "m-2 flex",
    form: "m-auto text-sm border px-4 rounded w-1/2",
    label: "align-bottom font-light py-1",
    submitButton:
      "bg-indigo-600 rounded text-white px-3 py-1 m-2 text-center justify-end w-24 hover:bg-indigo-500",
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.form}>
        <label htmlFor="min">Minimum Price</label>
        <input
          id="min"
          name="min"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.min}
          className={classes.formInput}
        />
        <label htmlFor="max">Maximum Price</label>
        <input
          id="max"
          name="max"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.max}
          className={classes.formInput}
        />
        <button type="submit" className={classes.submitButton}>
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterPrice;
