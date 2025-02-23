import React from "react";
import { Link } from "react-router-dom";
import "../ProductDetails-CSS/ClothingCard.css";

const ClothingCard = ({ product }) => {
  return (
    <Link to={`/product/${product.productName}`} state={{ product }} className="clothing-card">
      <img src={product.imageURL} alt={product.productName} className="clothing-image" />
      <h2 className="clothing-name">{product.productName}</h2>
      <h3 className="clothing-price">Rs. {product.price}</h3>
    </Link>
  );
};

export default ClothingCard;
