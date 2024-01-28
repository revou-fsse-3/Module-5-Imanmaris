
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import LoginForm from '.';

describe ('Login Form Unit Testing', () => {

    const mockSubmit =  jest.fn()   


    test('Login Form Render Correctly', () => {
        
        // const document = render(<Button label={'Button testing'} onClick={() => console.log('asd')}/>);
        const document = render(<LoginForm onSubmit={mockSubmit}/>);
        expect(screen.getByText('Login to Continue')).toBeDefined();

        const emailInput = screen.getByPlaceholderText('email');
        expect(emailInput).toBeDefined();

        const usernameInput = screen.getByPlaceholderText('username');
        expect(usernameInput).toBeDefined();

        const passwordInput = screen.getByPlaceholderText('password');
        expect(passwordInput).toBeDefined;

    });

    test('Submit with Data from Input Value', async ()=> {

        render(<LoginForm onSubmit={mockSubmit}/>)
        const emailInput = screen.getByPlaceholderText('email');
        const usernameInput = screen.getByPlaceholderText('username');
        const passwordInput = screen.getByPlaceholderText('password');
        const buttonSubmit = screen.getByText('Submit')

        fireEvent.change(emailInput, {target: {value: 'marisiman99@gmail.com' }});
        fireEvent.change(usernameInput, {target: {value: 'imanmaris'}});
        fireEvent.change(passwordInput, {target: {value:'1234567890'}});
        fireEvent.click(buttonSubmit);

        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());

        expect(mockSubmit).toHaveBeenCalledWith({
            email: 'marisiman99@gmail.com',
            username: 'imanmaris',
            password: '1234567890'
        });
    });

});