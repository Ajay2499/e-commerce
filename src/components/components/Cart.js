import "../CSS/Cart.css";
import NavBar from "./Navbar";
import { useCart } from "./CartContext";

const Cart = () => {
    const { cartItems , removeFromCart } = useCart();
    // console.log(cartItems);

    // Function to handle quantity change
    // const handleQuantityChange = (id, amount) => {
    //     setCartItems((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    //         )
    //     );
    // };

    // // Function to remove item from cart
    // const removeFromCart = (id) => {
    //     setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    // };

    // // Function to remove item from cart
    const HandleDelete = (id ,size) => {
        removeFromCart(id , size); 
    };

    // Ensure cartItems is an array before using map() and reduce()
    if (!Array.isArray(cartItems)) {
        console.error("cartItems is not an array:", cartItems);
        return <p>Error: Cart data is invalid.</p>;
    }

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <NavBar />
            <h2 className="cart-title">Cart</h2>

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
                                <button onClick={() => HandleDelete(item.id , item.size)}>Delete</button>
                                {/* <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>−</button> */}
                                <span>{item.quantity}</span>
                                {/* <button onClick={() => handleQuantityChange(item.id, 1)}>+</button> */}
                            </div>

                            <p className="cart-item-total">Rs. {item.price * item.quantity}</p>

                            {/* <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑</button> */}
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
