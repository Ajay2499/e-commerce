import React from "react";
import "../AddressComponent/AddressComponent.css";

const CartSummary = () => {
  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <ul>
        <li>Item 1 - ₹3000</li>
        <li>Item 2 - ₹2500</li>
        <li>Item 3 - ₹4000</li>
      </ul>
      <h4>Total: ₹9500</h4>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default CartSummary;
