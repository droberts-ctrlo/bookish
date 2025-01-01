import React from "react";
import { Book } from "./types";

export default function BookList({books}:{books:Book[]}) {
    return <div data-test="book-list">
      {books.map(book => (<div className="book-item">
        <h2 className="title">{book.name}</h2>
      </div>))}
    </div>
}