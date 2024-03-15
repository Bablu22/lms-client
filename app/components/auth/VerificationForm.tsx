"use client";

import { useRegisterMutation } from "@/app/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ErrorMessage from "../ErrorMessage";
import OptTimer from "./OtpTimer";

interface Props {
  email: string;
  token: string;
}

const VerificationForm = ({ email, token }: Props) => {
  const [register, { error: mutationError, data, isSuccess }] =
    useRegisterMutation();

  const router = useRouter();
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  type Otp = {
    0: string;
    1: string;
    2: string;
    3: string;
  };

  const [otp, setOtp] = useState<Otp>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const [error, setError] = useState<string>("");
  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
    setOtp({
      ...otp,
      [index]: value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Verification successful! You can now login.");
      router.push("/login");
      setError("");
    }

    if (mutationError) {
      const error = mutationError as any;
      setError(error.message);
    }
  }, [mutationError, isSuccess]);

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredOtp = Object.values(otp).join("");

    if (enteredOtp.length < 4) {
      setError("Please enter a valid OTP");
      return;
    }
    setError("");
    register({
      token,
      code: enteredOtp,
    });
  };

  return (
    <div className="max-w-md mx-auto ">
      {
        /* 5 minute countdown*/
        <div className=" mt-7">
          <OptTimer token={token} />
        </div>
      }
      {error && <ErrorMessage errorMessage={error} />}
      <form className="space-y-6" onSubmit={handleVerify}>
        <div className="text-white text-center mt-10">
          <div className="mt-4">
            <p className="font-thin">
              Enter the OTP sent to your email address!
            </p>
            <p className=" font-medium">{email}</p>
          </div>
          <div className="flex justify-center mt-5 space-x-5">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={otp[index as keyof Otp]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="input text-center font-2xl focus:ring-2 focus:ring-accent focus:outline-none focus:border-accent"
                placeholder="*"
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="form-btn">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationForm;
