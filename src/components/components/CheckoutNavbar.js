import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/CheckoutNavbar.css";

const CheckoutNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const steps = ["cart", "address", "payment"];
    const currentStepIndex = steps.indexOf(location.pathname.replace("/", "") || "cart");

    // Handle backward navigation
    const handleNavigation = (step) => {
        const stepIndex = steps.indexOf(step);
        if (stepIndex < currentStepIndex) {
            navigate(`/${step}`);
        }
    };

    return (
        <div className="checkout-navbar">
            <div className="logo">Fuaark</div>
            <div className="steps">
                {steps.map((step, index) => (
                    <React.Fragment key={step}>
                        {index > 0 && <span className="separator">------------</span>}
                        <span
                            className={`step ${index <= currentStepIndex ? "active" : ""}`}
                            onClick={() => handleNavigation(step)}>{step.toUpperCase()}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CheckoutNavbar;
