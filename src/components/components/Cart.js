import "../CSS/Cart.css";
import NavBar from "./Navbar";
import { useCart } from "./CartContext";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckoutNavbar from "./CheckoutNavbar";


const Cart = () => {
    const { cartItems, removeFromCart, handleQuantityProducts , sendCartToBackend} = useCart();
    const navigate = useNavigate();

    // Function to handle quantity change
    const handleQuantityChange = (id, amount, size) => {
        handleQuantityProducts(id, amount, size);
    };

    // // Function to remove item from cart
    const HandleDelete = (id, size) => {
        removeFromCart(id, size);
    };

    const handleCheckOut = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            localStorage.setItem("pendingCart", JSON.stringify(cartItems));
            alert("Please log in first!");
            navigate("/");
            return;
        }
        const cartData = {
            cartItems: cartItems.map(item => ({
                productID: item.id,
                sizeName: item.size,  // Ensure SizeID is an integer
                quantity: item.quantity,
                price: item.price  // Price will be verified by backend
            }))
        };
        sendCartToBackend(cartData);
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <CheckoutNavbar />
            <div className="cart-title-count">
                <h2 className="cart-title">Cart</h2>
                <h3 className="cart-count">{cartItems.length} items in your cart</h3>
            </div>

            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageURL} alt={item.name} className="cart-item-image" />

                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-size">Size: {item.size}</p>
                                <p className="cart-item-price">Rs. {item.price}</p>
                            </div>

                            <div className="cart-item-quantity">
                                <button onClick={() => handleQuantityChange(item.id, -1, item.size)} disabled={item.quantity <= 1}>−</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1, item.size)} disabled={item.quantity >= 10}>+</button>
                            </div>

                            <p className="cart-item-total">Rs. {item.price * item.quantity}</p>

                            <button onClick={() => HandleDelete(item.id, item.size)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}

            <div className="cart-total">
                <h3>Total</h3>
                <p>Rs. {totalPrice}</p>
                <button className="checkout-btn" onClick={handleCheckOut} >Check out</button>
            </div>
        </div>
    );
};

export default Cart;
