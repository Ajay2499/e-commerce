import React from "react";
import { Link } from "react-router-dom";
import "../Authentication/Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-heading">Fuaark</h2>
      <div className="auth-box">
        <h3>Sign Up</h3>
        <input type="text" placeholder="First Name" className="auth-input" />
        <input type="text" placeholder="Last Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Sign Up</button>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
