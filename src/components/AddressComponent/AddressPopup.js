import React, { useState } from "react";
import "./AddressPopup.css";

const AddressPopup = ({ closePopup, saveAddress, editData }) => {
  const [form, setForm] = useState(
    editData || { name: "", mobile: "", address: "", type: "Home" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.mobile && form.address) {
      saveAddress(form);
      closePopup();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{editData ? "Edit Address" : "Add New Address"}</h3>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile No" required />
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        <div className="popup-actions">
          <button className="cancel-btn" onClick={closePopup}>Cancel</button>
          <button className="save-btn" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddressPopup;
