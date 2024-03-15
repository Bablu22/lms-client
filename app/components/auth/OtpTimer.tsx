import React, { useEffect, useState } from "react";

interface Props {
  token: string;
}

const CountdownTimer: React.FC<Props> = ({ token }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const countdownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

    let storedToken = localStorage.getItem("countdownToken");
    let startTime: number;

    if (storedToken === token) {
      const storedStartTime = localStorage.getItem("countdownStartTime");
      if (storedStartTime) {
        startTime = parseInt(storedStartTime, 10);
        const elapsedTime = Date.now() - startTime;
        const adjustedRemainingTime = countdownDuration - elapsedTime;
        setRemainingTime(Math.max(0, adjustedRemainingTime));
      } else {
        startTime = Date.now();
        localStorage.setItem("countdownStartTime", startTime.toString());
        setRemainingTime(countdownDuration);
      }
    } else {
      startTime = Date.now();
      localStorage.setItem("countdownToken", token);
      localStorage.setItem("countdownStartTime", startTime.toString());
      setRemainingTime(countdownDuration);
    }

    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [token]);

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
