import React from "react";
import { useBookCatalog } from '../hooks/useBookCatalog';
import { useFilteredBooks } from '../hooks/useFilteredBooks';
import Header from "../Components/Header";
import "../styles/Home.css";
import {useNavigate} from "react-router-dom";
import BookCard from "../Components/BookCard";
const Home = () => {
    const books = useBookCatalog();
    const { searchTerm, setSearchTerm, filteredBooks } = useFilteredBooks(books);
    const navigate = useNavigate();

    return (
        <div className="main-page">
            <Header
                title="Catálogo de Libros"
                searchPlaceholder="Buscar por título..."
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <section className="main-page__catalog">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
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