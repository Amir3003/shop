import React from "react";
import '../style/Cart.css';

const Cart = ({ cart, toggleCart, removeFromCart }) => {    
const totalPrice = cart.reduce((total, product) => total + (+product.price), 0);
    return (
        <div className="cart-overlay">
            <div className="cart-container">
                <button className="cart-close" onClick={toggleCart}>Close</button>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="cart-list">
                        {cart.map((product) => (
                            <li key={product.id} className="cart-item">
                                <h3>{product.name}</h3>
                                <p>Price: {product.price} тг.</p>
                                <button className="cart-item-remove" onClick={() => removeFromCart(product.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <>
                        <button className="cart-clear" onClick={() => cart.forEach(product => removeFromCart(product.id))}>Clear Cart</button>
                        <button className="cart-checkout">Checkout</button>
                    </>
                )}
                <h3>
                    Total: {totalPrice} тг.
                </h3>
            </div>
        </div>
    );
}

export default Cart;