import React, { useState } from "react";
import "./AddressComponent.css";
import AddressPopup from "./AddressPopup";
import CartSummary from "../components/CartSummary";
import NavBar from "../components/Navbar";
import CheckoutNavbar from "../components/CheckoutNavbar";

const AddressComponent = () => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Shivendra Jiju",
            mobile: "7355199364",
            address: "House No 1710, Naya Ram Nagar, Orai, Uttar Pradesh - 285001",
            type: "Home",
            isDefault: true,
        },
        {
            id: 2,
            name: "Ajay Yadav",
            mobile: "7355199364",
            address: "Flat no. 15001, Aditya World City, Ghaziabad, Uttar Pradesh",
            type: "Home",
            isDefault: false,
        },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [editAddress, setEditAddress] = useState(null);

    const addOrUpdateAddress = (newAddress) => {
        if (editAddress) {
            setAddresses(
                addresses.map((addr) =>
                    addr.id === editAddress.id ? { ...newAddress, id: editAddress.id } : addr
                )
            );
        } else {
            setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
        }
        setShowPopup(false);
        setEditAddress(null);
    };

    const removeAddress = (id) => {
        setAddresses(addresses.filter((addr) => addr.id !== id));
    };

    return (
        <div>
            <CheckoutNavbar />
            <div className="address-container">
                <div className="address-section">
                    <div className="address-h1-btn">
                        <h2>Select Delivery Address</h2>
                        <button className="add-btn" onClick={() => setShowPopup(true)}>Add New Address</button>
                    </div>
                    {addresses.map((addr) => (
                        <div key={addr.id} className={`address-card ${addr.isDefault ? "default" : ""}`}>
                            <div className="address-header">
                                <h3>{addr.name}</h3>
                                <p>{addr.address}</p>
                                <p><strong>Mobile:</strong> {addr.mobile}</p>
                            </div>
                            <div className="address-actions">
                                <button className="edit-btn" onClick={() => { setEditAddress(addr); setShowPopup(true); }}>Edit</button>
                                <button className="remove-btn" onClick={() => removeAddress(addr.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <CartSummary />
                    <div>
                    </div>
                </div>
                {showPopup && (
                    <AddressPopup
                        closePopup={() => { setShowPopup(false); setEditAddress(null); }}
                        saveAddress={addOrUpdateAddress}
                        editData={editAddress}
                    />
                )}
            </div>
        </div>
    );
};

export default AddressComponent;
