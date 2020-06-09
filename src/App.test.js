import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';


test('renders header elements', () => {
    const { getByText } = render(<App />);
    const headerText = getByText('Persons API');
    expect(headerText).toBeInTheDocument();
});

describe('<App /> without props', () => {
    const container = shallow(<App />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});