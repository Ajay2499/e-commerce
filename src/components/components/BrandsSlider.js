import React from "react";
import "../CSS/BrandsSlider.css";
import logo1 from "../../assets/brandslogo/logo1.png";
import logo2 from "../../assets/brandslogo/logo2.png";
import logo3 from "../../assets/brandslogo/logo3.png";
import logo4 from "../../assets/brandslogo/logo4.png";
import logo5 from "../../assets/brandslogo/logo5.png";
import logo6 from "../../assets/brandslogo/logo6.png";
import logo7 from "../../assets/brandslogo/logo7.png";
import logo8 from "../../assets/brandslogo/logo8.png";


const BrandsSlider = () => {
  return (
    <div className="brands-slider">
      <div className="brands-track">
        <img src={logo1} alt="Brand 1" className="brand-logo" />
        <img src={logo2} alt="Brand 2" className="brand-logo" />
        <img src={logo3} alt="Brand 3" className="brand-logo" />
        <img src={logo4} alt="Brand 4" className="brand-logo" />
        <img src={logo5} alt="Brand 5" className="brand-logo" />
        <img src={logo6} alt="Brand 6" className="brand-logo" />
        <img src={logo7} alt="Brand 7" className="brand-logo" />
        <img src={logo8} alt="Brand 8" className="brand-logo" />
      </div>
    </div>
  );
};

export default BrandsSlider;
