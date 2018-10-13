import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders <App /> children', () => {
        const children = shallow(<App />);
        expect(children).to.have.length(1);
    });
    // return children;
});