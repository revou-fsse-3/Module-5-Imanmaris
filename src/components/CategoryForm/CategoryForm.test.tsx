
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import CategoryForm from '.';

describe ('Category Form Unit Testing', () => {

    const mockSubmit =  jest.fn()   


    test('Category Form Render Correctly', () => {
        
        render(<CategoryForm onSubmit={mockSubmit}/>);
        
        const title = screen.getByText('Form Category');
        expect(title).toBeDefined();

        const label = screen.getByText('Name');
        expect(label).toBeDefined();

        const input = screen.getByPlaceholderText('Input Name');
        expect(input).toBeDefined();

        const buttonSubmit = screen.getByText('Submit');
        expect(buttonSubmit).toBeDefined();

    });

    test('Category Form send with correct Data', async ()=> {

        render(<CategoryForm onSubmit={mockSubmit}/>);

        const input = screen.getByPlaceholderText('Input Name');
        const buttonSubmit = screen.getByText('Submit');

        fireEvent.change(input, { target: {value: 'Iman Maris' }});
        fireEvent.click(buttonSubmit);

        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());

        expect(mockSubmit).toHaveBeenCalledWith({
            name: 'Iman Maris'
        });

    });

});