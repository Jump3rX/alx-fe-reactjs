import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleSubmit(e) {
    if (validateForm()) {
      console.log("submitted");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        {errors.username && <small>{errors.username}</small>}

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        {errors.email && <small>{errors.email}</small>}

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        {errors.password && <small>{errors.password}</small>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
