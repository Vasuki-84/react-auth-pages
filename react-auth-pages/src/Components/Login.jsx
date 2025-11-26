
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/signup");

      const user = res.data.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid email or password");
        return;
      }

+      localStorage.setItem("loggedUser", JSON.stringify(user));

      alert("Login successful!");
      navigate("/home"); 
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title"> Login Page</h2>

      <form onSubmit={loginUser} className="login-form">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

