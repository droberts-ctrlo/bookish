import React from "react";
import BookList from "./BookList";
import { useBooks } from "./useBooks";

export default function BookListContainer() {
    const { books, loading, error } = useBooks();

    return <BookList books={books} />;
}
