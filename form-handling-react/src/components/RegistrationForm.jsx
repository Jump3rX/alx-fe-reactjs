import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields must be completed!");
    } else {
      console.log(formData);
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
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          value={formData.username}
          required
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          required
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
          required
        />

        <button type="submit"></button>
      </form>
    </div>
  );
}

export default RegistrationForm;
