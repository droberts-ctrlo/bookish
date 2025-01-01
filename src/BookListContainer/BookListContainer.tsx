import React from "react";
import { useBooks } from "../hooks/useBooks";
import BookList from "../BookList/BookList";

export default function BookListContainer() {
    const { books, loading, error } = useBooks();

    return <BookList books={books} loading={loading} error={error} />;
}
