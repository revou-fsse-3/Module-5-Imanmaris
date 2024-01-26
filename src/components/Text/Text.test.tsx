
import {render, screen} from '@testing-library/react';
import Text from '.';

describe ('Unit Test for Text Component', () => {

    test('component should be return text', () => {
        
        render(<Text>{'testing text'}</Text>);
        const element = screen.getByText('testing text')
        expect(element).toMatchSnapshot();
    })
    
    test ('component should have a classname', () => {

      const document = render(<Text className='testing-className'>{'testing unit'}</Text>);
      expect(document).toMatchSnapshot();

    })  
});