import { useState, useMemo } from 'react';

export const useFilteredBooks = (books) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = useMemo(() => {
        return books.filter(book =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return { searchTerm, setSearchTerm, filteredBooks };
};

