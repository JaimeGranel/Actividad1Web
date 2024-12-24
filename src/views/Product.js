import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookCatalog } from "../hooks/useBookCatalog";
import { useBookById } from "../hooks/useBookById";
import { useCart } from "../hooks/useCart";
import "../styles/Product.css";
import Header from "../Components/Header";

const Product = () => {
    const { id } = useParams(); // Obtener ID desde la URL
    const bookCatalog = useBookCatalog(); // Obtener catálogo
    const { addToCart } = useCart(); // Manejar carrito
    const navigate = useNavigate(); // Navegar entre rutas

    const [confirmation, setConfirmation] = useState(false); // Confirmación al añadir al carrito
    const product = useBookById(id, bookCatalog); // Buscar producto por ID

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        setConfirmation(true);
        setTimeout(() => {
            setConfirmation(false);
        }, 2000);
    };

    return (
        <div className="product-detail">
            <div className="product-detail__image-container">
                <img src={product.image} alt={product.name} className="product-detail__image" />
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__title">{product.name}</h1>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__price">Precio: ${product.precio.toFixed(2)}</p>
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
                    <p className="product-detail__confirmation">
                        ¡Producto añadido al carrito!
                    </p>
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