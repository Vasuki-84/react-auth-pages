import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email, password };

      await axios.post(`http://localhost:5000/signup`, userData);
      alert("Signup successfull");
      navigate("/login")
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">SignUp form</h2>
      <form className="signup-form" onSubmit={createUser}>
        <label>Id</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="signup-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
