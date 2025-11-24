import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      await axios.post(`http://localhost:5000/login`, userData);
      alert("login successfull");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
