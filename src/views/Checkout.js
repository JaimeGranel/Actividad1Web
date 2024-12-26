import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
    const { cart, updateCartItem, removeFromCart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePayment = () => {
        if (cart.length > 0) {
            alert("Pago realizado con éxito. Gracias por tu compra.");
            clearCart();
            navigate("/home");
        } else {
            alert("El carrito está vacío.");
        }
    };

    return (
        <div className="checkout">
            <h1>Resumen de Compra</h1>
            {cart.length > 0 ? (
                <>
                    <ul className="checkout__list">
                        {cart.map((book) => (
                            <li key={book.id}>
                                <span>{book.name}</span> <span>{book.quantity}</span> <span>{book.precio}€</span>
                                <div>
                                    <button onClick={() => updateCartItem(book.id, book.quantity + 1)}>+</button>
                                    <button onClick={() => updateCartItem(book.id, book.quantity - 1)}
                                            disabled={book.quantity <= 1}>
                                        −
                                    </button>
                                    <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout__total">
                        Total: {getTotalPrice()} €
                    </div>
                    <button className="checkout__pay-button" onClick={handlePayment}>
                        Confirmar Pago
                    </button>
                </>
            ) : (
                <p>No hay libros en el carrito.</p>
            )}
            <button className="checkout__back-button" onClick={() => navigate("/home")}>
                ← Volver al Inicio
            </button>
        </div>
    );
};

export default Checkout;
