import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useBookCatalog } from "../hooks/useBookCatalog";
import "../styles/CartDropdown.css";

const CartDropdown = () => {
    const { cart, updateCartItem, removeFromCart, getTotalPrice } = useCart();
    const { updateBookById,bookCatalog } = useBookCatalog();
    const navigate = useNavigate();

    const handleReduceUnit = (book) => {
        const catalogBook = bookCatalog.find((b) => b.id === book.id);
        if (book.quantity > 1) {
            updateCartItem(book.id, book.quantity - 1);
            updateBookById(book.id, { stock: catalogBook.stock + 1 });
        } else {
            handleRemoveFromCart(book);
        }
    };

    const handleRemoveFromCart = (book) => {
        const catalogBook = bookCatalog.find((b) => b.id === book.id);
        removeFromCart(book.id);
        updateBookById(book.id, { stock: catalogBook.stock + book.quantity });
    };


    return (
        <div className="cart-dropdown">
            <h2>Tu Carrito</h2>
            {cart.length > 0 ? (
                <>
                    <ul className="cart-dropdown__list">
                        {cart.map((book) => (
                            <li key={book.id} className="cart-dropdown__item">
                                <span>{book.name} (x{book.quantity})</span>
                                <div>
                                    <button onClick={() => handleReduceUnit(book)}>−</button>
                                    <button onClick={() => handleRemoveFromCart(book)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-dropdown__total">
                        Total: {getTotalPrice()} €
                    </div>
                    <button
                        className="cart-dropdown__checkout-button"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceder al Checkout
                    </button>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default CartDropdown;
