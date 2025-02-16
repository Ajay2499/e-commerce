import React from "react";
import { Link } from "react-router-dom";
import "../CSS/CategoryCard.css";

const CategoryCard = ({ imageURL, category, link }) => {
  return (
    <Link to={link} className="category-card">
      <img src={imageURL} alt={category} className="category-image" />
      <div className="category-label">{category}</div>
    </Link>
  );
};

export default CategoryCard;
