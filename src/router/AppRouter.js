import React, { useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contacts from "../components/Contacts";
import Cart from "../components/Cart";
 

const AppRouter = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };  

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);  
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/manga">Manga</Link>
                <Link to="/contacts">Contacts</Link>
                <button className="cart-button" onClick={toggleCart}>
                    Cart ({cart.length})
                </button>
            </nav>
            {isCartOpen && <Cart toggleCart={toggleCart} cart={cart} removeFromCart={removeFromCart} />} 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manga" element={<ProductList addToCart={addToCart} />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );  
}

export default AppRouter;