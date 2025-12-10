import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sreesairam");

  useEffect(() => {
    console.log("SREESAIRAM ESHWAR AGH");
  }, [count, name]);

  return (
    <div>
      <h1>UseEffect Example</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Current Name: {name}</h2>
    </div>
  );
};

export default UseEffectComponent;
