import React, { useState } from "react";

const UsestateformComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitthings = (e) => {
    e.preventDefault(); // stop page refresh
    console.log("The name is:", name);
    console.log("The email is:", email);
  };

  return (
    <div>
      <h1>Use State Form Component</h1>

      <form onSubmit={submitthings}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleName} />

        <br /> <br />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmail} />

        <br /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsestateformComponent;