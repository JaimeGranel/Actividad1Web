import React, { useState, createContext, useContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((book) => book.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext);
};
