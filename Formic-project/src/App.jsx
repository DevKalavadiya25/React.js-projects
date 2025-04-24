import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      dob: Yup.date()
        .required("Date of Birth is required")
        .nullable(),
      gender: Yup.string()
        .oneOf(["male", "female", "other"], "Invalid gender")
        .required("Gender is required"),
      terms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values); // Log form values to the console
      alert("Form submitted!"); // Show a simple alert
    },
  });

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="error">{formik.errors.dob}</div>
          )}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "male"}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "female"}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "other"}
              />
              Other
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            I accept the terms and conditions
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <div className="error">{formik.errors.terms}</div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;