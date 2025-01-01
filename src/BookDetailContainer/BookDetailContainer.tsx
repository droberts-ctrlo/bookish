import React from "react";
import BookDetail from "../BookDetail/BookDetail";
import { useBook } from "../hooks/useBooks";

export default function BookDetailContainer() {
    const { book } = useBook();

    return <BookDetail book={book!} />;
}
