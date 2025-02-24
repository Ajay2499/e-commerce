import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Authentication/Auth.css";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [PasswordHash, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userData = { firstName, lastName, email, PasswordHash };

      const response = await axios.post("https://localhost:44348/api/Auth/register", userData);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Signup failed");
      } else {
        alert("Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Fuaark</h2>
      <div className="auth-box">
        <h3>Sign Up</h3>
        <input type="text" placeholder="First Name" className="auth-input" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" className="auth-input" onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" className="auth-input" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="auth-input" onChange={(e) => setPassword(e.target.value)} />
        <button className="auth-button" onClick={HandleSignUp}>Sign Up</button>
        <p className="auth-footer">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
