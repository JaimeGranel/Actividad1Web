import React from "react";
import PropTypes from "prop-types";
import "../styles/BookCard.css";

const BookCard = ({ book, onClick }) => {
    return (
        <div className="book-card" onClick={onClick}>
            <img src={book.image} alt={book.name} className="book-card__image" />
            <h2 className="book-card__title">{book.name}</h2>
            <p className="book-card__price">{book.precio.toFixed(2)}€</p>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default BookCard;