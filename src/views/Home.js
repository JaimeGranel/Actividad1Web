import React from "react";
import { useBookCatalog } from '../hooks/useBookCatalog';
import { useFilteredBooks } from '../hooks/useFilteredBooks';
import "../styles/Home.css";
import {useNavigate} from "react-router-dom";
import BookCard from "../Components/BookCard";


const Home = ({ setSearchTerm, searchTerm }) => {
    const books = useBookCatalog();
    const { filteredBooks } = useFilteredBooks(books, searchTerm);
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
                    <p className="main-page__no-results">No se encontraron libros con ese título.</p>
                )}
            </section>
        </div>
    );
};

export default Home;