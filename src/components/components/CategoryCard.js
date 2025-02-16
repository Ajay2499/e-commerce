import React from "react";
import "../CSS/CategoryCard.css";

const CategoryCard = ({ imageURL, category, link }) => {
  return (
    <a href="/" className="category-card">
      <img src={imageURL} alt={category} className="category-image" />
      <h2 className="category-label">{category}</h2>
    </a>
  );
};

export default CategoryCard;
