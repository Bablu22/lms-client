"use client";

import React, { useRef, useState } from "react";
import OptTimer from "./OtpTimer";

const VerificationForm = () => {
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
  const [isStart, setIsStart] = useState<boolean>(false);

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
    setOtp({
      ...otp,
      [index]: value,
    });
  };

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredOtp = Object.values(otp).join("");
    console.log(enteredOtp);

    if (enteredOtp === "1234") {
      // Example: replace "1234" with your actual OTP
      setError("");
      // Success: Perform actions after OTP verification
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto ">
      {
        /* 5 minute countdown*/
        <div className=" mt-7">
          <OptTimer isStart={isStart} />
        </div>
      }
      <form className="space-y-6" onSubmit={handleVerify}>
        <div className="text-white text-center mt-10">
          <div className="mt-4">
            <p className="font-thin">Enter the OTP you received at</p>
            <p className=" font-medium">bablu@gmail.com</p>
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
          {error && <p className="text-red-300 text-sm mt-5">{error}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="
            bg-accent  text-gray-900  w-full  py-2  rounded-md  font-semibold  shadow-sm  hover:bg-accent-dark  focus:outline-none    mt-5
          "
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationForm;
