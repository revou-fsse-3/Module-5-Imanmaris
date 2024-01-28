

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Table from '.';

describe ('Table page component Unit Testing', () => {

    test('Table should be Render Correctly', () => {
        
        render(<Table data={[]} />);
        
        const title = screen.getByText('Category List');
        expect(title).toBeDefined();

        const noColumn = screen.getByText('Nomor');
        expect(noColumn).toBeDefined();

        const nameColumn = screen.getByText('Name');
        expect(nameColumn).toBeDefined();

        const statusColumn = screen.getByText('Status');
        expect(statusColumn).toBeDefined();

        const actionColumn = screen.getByText('Action');
        expect(actionColumn).toBeDefined();

        const buttonSubmit = screen.getByText('Submit');
        expect(buttonSubmit).toBeDefined();

    });

    test ('Table should be render with Props Data', () => {
        
        const categories = [
            {
                id: 1,
                name: 'test',
                status: 'active',
                action: <button>{'testing button'}</button>
            }
        ]

        render(<Table data= {categories} />);

        const title = screen.getByText('Category List');
        expect(title).toBeDefined();

        const noColumn = screen.getByText('Nomor');
        expect(noColumn).toBeDefined();

        const nameColumn = screen.getByText('Name');
        expect(nameColumn).toBeDefined();

        const statusColumn = screen.getByText('Status');
        expect(statusColumn).toBeDefined();

        const actionColumn = screen.getByText('Action');
        expect(actionColumn).toBeDefined();

        const buttonSubmit = screen.getByText('Submit');
        expect(buttonSubmit).toBeDefined();


        categories.map((category)=> {
            expect(category.id).toBeDefined();
            expect(category.name).toBeDefined();
            expect(category.status).toBeDefined();
            expect(category.action).toBeDefined();
        })
    })


});