import React, { useEffect, useState } from "react";

const UseEffectPracticeTwo = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const interval = setInterval(() => {
      setSecond((prev) => prev + 1); // Correct functional update
    }, 1000); // 1 second

    return () => clearInterval(interval); // Cleanup
  }, []); // Runs only once

  return (
    <div>
      <h1>Seconds passed: {second}</h1>
    </div>
  );
};

export default UseEffectPracticeTwo;
