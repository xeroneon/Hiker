import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('renders <App /> children', () => {
        const children = shallow(<App />);
        expect(children),toHaveLength(1);
    });
});