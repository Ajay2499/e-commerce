import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Authentication/Auth.css";
import axios from "axios";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (userData) => {
    const response = await axios.post("https://localhost:44348/api/Auth/login", userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const response = await login(userData);

      if (response && response.token) {
        window.alert("Login successful!");
        navigate("/homePage");
      } else {
        window.alert("Invalid credentials");
      }
    } catch (error) {
      window.alert("Invalid credentials");
    }
  };


  return (
    <div>
      {/* <Navbar /> */}
      <div className="auth-container">
        <h2 className="auth-heading">Fuaark</h2>
        <div className="auth-box">
          <h3>Login</h3>
          <input type="email" placeholder="Email" className="auth-input" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="auth-input" onChange={(e) => setPassword(e.target.value)} />
          <button className="auth-button" onClick={handleLogin}>Login</button>
          <p className="auth-footer">
            Create an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
