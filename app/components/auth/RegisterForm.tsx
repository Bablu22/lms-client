"use client";

import { useFormik } from "formik";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters long"),
});

const RegisterForm = () => {
  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          className={`${
            errors.email && touched.email ? "ring-red-200" : ""
          } input`}
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && touched.name ? (
          <div className="text-red-300 text-xs mt-2">{errors.name}</div>
        ) : null}
      </div>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          className={`${
            errors.email && touched.email ? "ring-red-200" : ""
          } input`}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <div className="text-red-300 text-xs mt-2">{errors.email}</div>
        ) : null}
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className={`${
            errors.password && touched.password ? "ring-red-200" : ""
          } input`}
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && touched.password ? (
          <div className="text-red-300 text-xs mt-2">{errors.password}</div>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm "
        >
          Create an account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
