import React from "react";
import "../CSS/Highlight.css";
import imghighlight from "../../assets/highlight.jpg";

const Highlight = () => {
  return (
    <div className="highlight-container">
      <a href="#" className="highlight-link">
        <img src={imghighlight} alt="Highlight" className="highlight-image" />
      </a>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  );
};

export default Highlight;
