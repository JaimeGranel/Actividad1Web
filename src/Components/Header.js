import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = ({ searchTerm, setSearchTerm }) => {
    const { cart } = useCart();
    const navigate = useNavigate();

    return (
        <header className="header">
            {searchTerm === undefined && setSearchTerm === undefined && (
                <button className="header__back-button" onClick={() => navigate(-1)}>
                    ← Volver
                </button>
            )}

            <h1 className="header__title">Relatos de Papel</h1>

            {searchTerm !== undefined && setSearchTerm !== undefined && (
                <input
                    type="text"
                    className="header__search"
                    placeholder="Buscar por título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}

            <div className="header__cart" onClick={() => navigate("/cart")}>
                🛒 <span className="header__cart-count">{cart.length}</span>
            </div>
        </header>
    );
};

export default Header;