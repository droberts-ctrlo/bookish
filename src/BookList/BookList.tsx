import React from "react";
import { Book } from "../types";

export default function BookList({ books, error, loading }: {books:Book[], error:boolean, loading: boolean}) {
  return <div data-test="book-list">
    {loading && <div>Loading...</div>}
    {error && <div>Error</div>}
    {!error && !loading && books.map((book, index) => (<div key={index} className="book-item">
      <h2 className="title">{book.name}</h2>
    </div>))}
  </div>
}