import { describe, it, expect } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe("BookDetail", () => {
    it("renders title", ()=>{
        const props= {
            book: {name: "Refactoring", id: 1}
        };

        render(<BookDetail {...props}></BookDetail>);

        const title = screen.getByRole("heading");
        expect(title.innerHTML).toBe(props.book.name);
    });
});