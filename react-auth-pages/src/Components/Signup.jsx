import React from "react";

function Signup() {
  return (
    <div className="signup-container">
      <h2 className="signup-title">SignUp form</h2>
      <form className="signup-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Signup;
