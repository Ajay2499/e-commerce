import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Fuaark</Link>
      <div className="nav-links">
      <a className="nav-li">Men</a>
        <a className="nav-li">Women</a>
        <a className="nav-li">Compression</a>
        <a className="nav-li">New Arrival</a>
        <a className="nav-li">Caps</a>
      </div>
        
      <div className="nav-buttons">
        <button className="nav-btn-search">
          <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5012" cy="10.5011" r="7.75006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
            <path d="M16.2087 16.2009L21.0078 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <a href="/" className="nav-btn">Profile</a>
        <Link to="/cart" className="nav-btn">Cart</Link>
      </div>
    </div>
  );
};

export default NavBar;
