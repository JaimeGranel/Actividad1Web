import { useMemo } from "react";

export const useFilteredBooks = (books, searchTerm) => {
    const filteredBooks = useMemo(() => {
        if (!Array.isArray(books)) {
            console.error("Error: 'books' no es un array", books);
            return [];
        }
        return books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return { filteredBooks };
};
