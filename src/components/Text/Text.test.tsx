
import {render, screen} from '@testing-library/react';
import Text from '.';

describe ('Unit Test for Text Component', () => {

    test('component should be return text', () => {
        
        render(<Text>{'testing text'}</Text>);
        const element = screen.getByText('testing text')
        expect(element).toMatchSnapshot();
      })
    
});