import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../types";
import { useParams } from "react-router-dom";

export function useBook() {
    const { id } = useParams();
    const [book, setBook] = useState<Book>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);
            setError(false);

            try {
                const book = await axios.get<Book>(`http://localhost:8080/books/${id}`);
                setBook(book.data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    return { book, loading, error };
}

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get("http://localhost:8080/books");
                setBooks(response.data);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading, error };
}