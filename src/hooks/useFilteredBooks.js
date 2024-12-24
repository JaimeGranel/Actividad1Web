import { useState, useMemo } from 'react';


export const useFilteredBooks = (books, searchTerm) => {
    const filteredBooks = useMemo(() => {
        return books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return { filteredBooks };
};
