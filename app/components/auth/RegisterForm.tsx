"use client";

import { useSendVerificationMutation } from "@/app/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";

const registerSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters long"),
});

const RegisterForm = () => {
  const [sendVerification, { error, data, isLoading, isSuccess, isError }] =
    useSendVerificationMutation();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      const errorData = error as any;
      setErrorMessage(errorData.data.message);
    }

    if (isSuccess) {
      router.push(
        `/verification?email=${data.data.email}&token=${data.data.token}`
      );
    }
  }, [isSuccess, error]);

  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await sendVerification(values);
    },
  });

  return (
    <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
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
        <button type="submit" disabled={isLoading} className="form-btn ">
          <span>Register</span> {isLoading && <Spinner />}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
