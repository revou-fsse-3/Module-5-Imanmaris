
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import LoginForm from '.';

describe ('Login Form Unit Testing', () => {

    const mocking = {
        onSubmit : jest.fn()   
    }

    test('Login Form Render Correctly', () => {
        
        // const document = render(<Button label={'Button testing'} onClick={() => console.log('asd')}/>);
        const document = render(<LoginForm onSubmit={mocking.onSubmit}/>);
        expect(screen.getByText('Login to Continue')).toBeDefined();
    })



});