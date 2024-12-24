import { useMemo } from "react";

export const useBookById = (id, bookCatalog) => {
    return useMemo(() => bookCatalog.find((book) => book.id === parseInt(id)), [id, bookCatalog]);
};
