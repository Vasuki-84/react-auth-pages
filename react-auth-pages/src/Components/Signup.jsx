


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate all fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all the fields");
      return;
    }

    // validate password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/signup");

      const existingUser = res.data.find(
        (user) => user.email === formData.email
      );

      if (existingUser) {
        alert("Email already exists!");
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      await axios.post("http://localhost:5000/signup", newUser);

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup Form</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="signup-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;

