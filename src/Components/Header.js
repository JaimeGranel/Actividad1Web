import React, { useState } from "react";
import "../styles/Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartDropdown from "./CartDropdown";

const Header = ({ searchTerm, setSearchTerm }) => {
    const { cart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isHome = location.pathname === "/home";
    const isCheckout = location.pathname === "/checkout";

    return (
        <header className="header">
            {!isHome && !isCheckout && (
                <button className="header__back-button" onClick={() => navigate(-1)}>
                    ← Volver
                </button>
            )}

            <h1 className="header__title">Relatos de Papel</h1>

            {isHome && (
                <input
                    type="text"
                    className="header__search"
                    placeholder="Buscar por título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}

            <div className="header__cart" onClick={() => setIsCartOpen((prev) => !prev)}>
                🛒 <span className="header__cart-count">{cart.length}</span>
            </div>

            {isCartOpen && <CartDropdown />}
        </header>
    );
};

export default Header;
