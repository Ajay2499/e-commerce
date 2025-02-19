import React, { useEffect, useState } from "react";
import "../ProductDetails-CSS/ProductCard.css";
import NavBar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../components/CartContext";

const ProductCard = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity < 10 ? quantity + 1 : 10);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const location = useLocation();
    const [selectedSize, setSelectedSize] = useState("XS");
    const product = location.state?.product;
    const { addToCart } = useCart();

    const HandleAddCart = (selectedSize,quantity) => {
        const addProduct = {
            id: product.id,
            name: product.name,
            size: selectedSize,
            price : product.price,
            quantity: quantity,
            imageURL: product.imageURL
        };
        addToCart(addProduct);
    } 

    useEffect(() => {
        if (product.size.includes("XS")) {
            setSelectedSize("XS");
        } else {
            setSelectedSize(product.size[0]);
        }
    }, [product.size]);

    if (!product) {
        return <h2>Product not found</h2>;
    }
    return (
        <div>
            <NavBar />
            <div className="product-card">
                <img src={product.imageURL} alt={product.name} className="product-image" />
                <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">Rs.{product.price}</p>

                    <h3 className="size-heading">Sizes:</h3>
                    <div className="product-sizes">
                        {product.size.map((size) => (
                            <span key={size} className={`size ${selectedSize === size ? "selected" : ""}`}
                                onClick={() => setSelectedSize(size)}>{size}</span>
                        ))}
                    </div>

                    <div className="quantity-container">
                        <h3 className="quantity-heading">Quantity:</h3>
                        <div className="quantity-div">
                            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    <div className="button-group">
                        <Link to={`/cart`} className="add-to-cart" onClick={() => HandleAddCart(selectedSize, quantity)}>Add to Cart</Link>
                        <button className="buy-now">Buy It Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
