import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 61);
      console.log(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return <div>{seconds}</div>;
};

export default Timer;
