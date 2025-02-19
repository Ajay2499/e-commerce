import "../CSS/Cart.css";
import NavBar from "./Navbar";
import { useCart } from "./CartContext";
import Footer from "./Footer";

const Cart = () => {
    const { cartItems, removeFromCart, handleQuantityProducts } = useCart();

    // Function to handle quantity change
    const handleQuantityChange = (id, amount, size) => {
        handleQuantityProducts(id, amount, size);
    };

    // // Function to remove item from cart
    const HandleDelete = (id, size) => {
        removeFromCart(id, size);
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <NavBar />
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
                                {/* <button onClick={() => HandleDelete(item.id , item.size)}>Delete</button> */}
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
                <button className="checkout-btn">Check out</button>
            </div>
        </div>
    );
};

export default Cart;
