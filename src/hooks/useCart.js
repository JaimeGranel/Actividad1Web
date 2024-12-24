import { useState } from "react";

export const useCart = () => {
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

    return { cart, addToCart, removeFromCart, clearCart };
};