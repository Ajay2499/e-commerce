import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterest, FaEnvelope } from "react-icons/fa";
import "../CSS/Footer.css"; // Import the separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & About */}
        <div className="footer-about">
          <h2>Fuaark</h2>
          <h3>Who we are?</h3>
          <p>
            We at Fuaark strive to give you every push you need to get to those dreams!
            Putting on gear that not only offers enhanced performance but gives you the
            confidence to show up each day, every day.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <ul>
              <li>New Arrivals 🔥</li>
              <li>Offers</li>
              <li>T-Shirts</li>
              <li>Stringers</li>
              <li>Shorts</li>
              <li>Innerwear</li>
            </ul>
          </div>
          <div className="footer-pages">
            <h4>Pages</h4>
            <ul>
              <li>Fuaark Insiders</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-policies">
            <h4>Policies</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Refund & Return Policy</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
              <li>Return & Exchange</li>
              <li>Track your order</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-contact">
          <h3>Help</h3>
          <p>WhatsApp Us: <a href="tel:+917801883399">+91 7801883399</a></p>
          <p>Email Us: <a href="mailto:care@fuaark.com">care@fuaark.com</a></p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaPinterest />
            <FaEnvelope />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
