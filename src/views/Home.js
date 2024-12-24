import React from "react";
import { useNavigate } from "react-router-dom";
import { useBookCatalog } from "../hooks/useBookCatalog";
import { useFilteredBooks } from "../hooks/useFilteredBooks";
import "../styles/Home.css";
import BookCard from "../Components/BookCard";


const Home = ({ searchTerm }) => {
    const { bookCatalog } = useBookCatalog(); // Obtener catálogo de libros
    const { filteredBooks } = useFilteredBooks(bookCatalog, searchTerm || "");
    const navigate = useNavigate();

    return (
        <div className="main-page">
            <section className="main-page__catalog">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onClick={() => navigate(`/book/${book.id}`)}
                        />
                    ))
                ) : (
                    <p>Cargando libros...</p>
                )}
            </section>
        </div>
    );
};

export default Home;
