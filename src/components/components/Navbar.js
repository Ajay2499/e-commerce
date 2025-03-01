import "../CSS/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { cartItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isScrolling, setIsScrolling] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HandleClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      setIsLoggedIn(true);
      navigate("/homePage");
    }
  };

  return (
    <div className={`navbar ${isScrolling ? "navbar-scroll" : ""}`}>
      <Link to="/homePage" className="logo">Fuaark</Link>
      <div className="nav-links">
        <a className="nav-li">Men</a>
        <a className="nav-li">Women</a>
        <a className="nav-li">Compression</a>
        <a className="nav-li">New Arrival</a>
        <a className="nav-li">Caps</a>
      </div>

      <div className="nav-buttons">  
        <div className="profile-container" onClick={() => setProfileOpen(!profileOpen)}>
          <FaUserCircle size={27} className="profile-icon" />
          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile">View Profile</Link>
              <button>{isLoggedIn ? "Logout" : "Login"}</button>
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={25} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
        <button className="nav-btn" onClick={HandleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default NavBar;
