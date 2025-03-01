import React, { useState } from "react";
import "./Payment.css";
import CheckoutNavbar from "../components/CheckoutNavbar";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div>
            <CheckoutNavbar />
            <div className="payment-container">
                {/* Left Side: Payment Modes */}
                <div className="payment-modes">
                    <h2>Choose Payment Mode</h2>
                    <div className="payment-options">
                        {["Cash On Delivery (Cash/UPI)","Credit/Debit Card","UPI (Pay via any App)",  "Pay Later", "Wallets", "EMI", "Net Banking"].map((option, index) => (
                            <div 
                                key={index} 
                                className={`payment-option ${paymentMethod === option ? "active" : ""}`} 
                                onClick={() => setPaymentMethod(option)}
                            >
                                <span className="payment-icon">💳</span> {option}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Payment Details */}
                <div className="payment-details">
                    <h3>{paymentMethod}</h3>
                    
                    {paymentMethod === "Credit/Debit Card" && (
                        <div className="card-payment">
                            <input type="text" placeholder="Card Number" className="input-field" />
                            <input type="text" placeholder="Name on Card" className="input-field" />
                            <div className="card-info">
                                <input type="text" placeholder="Valid Thru (MM/YY)" className="input-field small" />
                                <input type="text" placeholder="CVV" className="input-field small" />
                            </div>
                            <button className="pay-btn">PAY NOW</button>
                        </div>
                    )}

                    {paymentMethod === "Cash On Delivery (Cash/UPI)" && (
                        <button className="pay-btn">Proceed</button>
                    )}
                    {paymentMethod === "UPI (Pay via any App)" && (
                        <button className="pay-btn">Proceed</button>
                    )}
                    {paymentMethod === "Pay Later" && (
                        <button className="pay-btn">Proceed</button>
                    )}
                    {paymentMethod === "Wallets" && (
                        <button className="pay-btn">Proceed</button>
                    )}
                </div>

                {/* Price Details Section */}
                <div className="price-details">
                    <h3>Price Details (1 Item)</h3>
                    <p>Total MRP: <span>₹7,095</span></p>
                    <p>Platform Fee: <span className="info">₹20</span></p>
                    <p>Shipping Fee: <span className="free">FREE</span></p>
                    <h3>Total Amount: <span>₹7,115</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Payment;
