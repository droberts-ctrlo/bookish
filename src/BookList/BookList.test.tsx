import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import BookList from './BookList';

describe('BookList', () => {
    const renderWithRouter = (component: React.JSX.Element) => {
        return render(<Router>{component}</Router>);
    }

    it('loading', async () => {
        const props = {
            loading: true
        }

        const container = renderWithRouter(<BookList {...props}></BookList>);

        const loading = container.queryByText('Loading...');
        expect(loading).not.toBeNull();
    });

    it('error', async () => {
        const props = {
            error: true
        }

        const container = renderWithRouter(<BookList {...props}></BookList>);

        const error = container.queryByText('Error');
        expect(error).not.toBeNull();
    });

    it('renders books', async () => {
        const props = {
            books: [
                { name: 'Refactoring', id: 1 },
                { name: 'Domain-driven design', id: 2 }
            ]
        };

        renderWithRouter(<BookList {...props}></BookList>);

        const headings = await screen.findAllByRole('heading');

        headings.forEach((heading, index) => {
            expect(heading.innerHTML).toBe(props.books[index].name);
        });
    });
});