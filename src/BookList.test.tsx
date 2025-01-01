import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {render,screen,within} from '@testing-library/react';

import BookList from './BookList';

describe('BookList', () => {
    it('renders books', async ()=>{
        const props = {
            books: [
                {name: 'Refactoring', id: 1},
                {name: 'Domain-driven design', id: 2}
            ]
        };

        render(<BookList {...props}></BookList>);

        const headings = await screen.findAllByRole('heading');

        headings.forEach((heading, index) => {
            expect(heading.innerHTML).toBe(props.books[index].name);
        });
    });
});