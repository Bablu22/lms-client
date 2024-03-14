"use client";

import React, { useEffect, useState } from "react";

interface Props {
  isStart: boolean;
}

const CountdownTimer: React.FC<Props> = ({ isStart }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const countdownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    let startTime: number;

    if (isStart) {
      const storedStartTime = localStorage.getItem("countdownStartTime");
      if (storedStartTime) {
        startTime = parseInt(storedStartTime, 10);
      } else {
        startTime = Date.now();
        localStorage.setItem("countdownStartTime", startTime.toString());
      }
      const elapsedTime = Date.now() - startTime;
      setRemainingTime(countdownDuration - elapsedTime);
    } else {
      localStorage.removeItem("countdownStartTime");
    }

    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStart]);

  // Format remaining time into minutes and seconds
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Format minutes and seconds with leading zeros
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="text-center text-white font-mono text-4xl">
      <p>{formattedTime}</p>
    </div>
  );
};

export default CountdownTimer;
