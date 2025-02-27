import React, { useState } from "react";
import "./Payment.css";
import NavBar from "../components/Navbar";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

    return (
        <div>
            <NavBar />
            <div className="payment-container">
                <div className="payment-options">
                    <h2>Choose Payment Mode</h2>

                    <label>
                        <input
                            type="radio"
                            value="cashOnDelivery"
                            checked={paymentMethod === "cashOnDelivery"}
                            onChange={() => setPaymentMethod("cashOnDelivery")}
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="upi"
                            checked={paymentMethod === "upi"}
                            onChange={() => setPaymentMethod("upi")}
                        />
                        UPI Payment
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                        />
                        Credit / Debit Card
                    </label>

                    {paymentMethod === "cashOnDelivery" && <button className="btn">Proceed</button>}
                    {paymentMethod !== "cashOnDelivery" && <button className="btn">Pay Now</button>}
                </div>

                <div className="price-details">
                    <h3>Price Details (5 Items)</h3>
                    <p>Total MRP: <span>₹13,291</span></p>
                    <p>Discount on MRP: <span className="discount">- ₹4,645</span></p>
                    <p>Platform Fee: <span>₹20</span></p>
                    <p>Shipping Fee: <span className="free">FREE</span></p>
                    <h3>Total Amount: <span>₹8,666</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Payment;
