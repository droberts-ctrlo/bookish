import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {render,screen} from '@testing-library/react';

import BookList from './BookList';

describe('BookList', () => {
    it('loading', async () => {
        const props = {
            loading: true
        }

        const container = render(<BookList {...props}></BookList>);

        const loading = container.queryByText('Loading...');
        expect(loading).not.toBeNull();
    });

    it('error', async () => {
        const props = {
            error: true
        }

        const container = render(<BookList {...props}></BookList>);

        const error = container.queryByText('Error');
        expect(error).not.toBeNull();
    });

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