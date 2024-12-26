import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookCatalog } from "../hooks/useBookCatalog";
import { useCart } from "../hooks/useCart";
import "../styles/Product.css";

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { bookCatalog, updateBookById } = useBookCatalog();
    const { addToCart } = useCart();

    const [confirmation, setConfirmation] = useState(false);

    const product = bookCatalog.find((book) => book.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    const handleAddToCart = () => {
        if (product.stock > 0) {
            addToCart(product);
            updateBookById(product.id, { stock: product.stock - 1 });
            setConfirmation(true);
            setTimeout(() => setConfirmation(false), 2000);
        }
    };

    return (
        <div className="product-detail">
            <div className="product-detail__image-container">
                <img src={product.image} alt={product.name} className="product-detail__image" />
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__title">{product.name}</h1>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__price">Precio: {product.precio.toFixed(2)}€</p>
                <p
                    className={`product-detail__stock ${
                        product.stock > 0 ? "in-stock" : "out-of-stock"
                    }`}
                >
                    {product.stock > 0 ? `Stock: ${product.stock}` : "Producto agotado"}
                </p>
                <button
                    className="product-detail__add-to-cart"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                >
                    {product.stock > 0 ? "Añadir al carrito" : "Sin stock"}
                </button>
                {confirmation && (
                    <p className="product-detail__confirmation">¡Producto añadido al carrito!</p>
                )}
                <button
                    className="product-detail__back-button"
                    onClick={() => navigate(-1)}
                >
                    ← Volver
                </button>
            </div>
        </div>
    );
};
export default Product;
