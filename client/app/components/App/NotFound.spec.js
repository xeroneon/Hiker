import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import SignUp from '../SignUp/SignUp';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<SignUp />', () => {
    it('renders <SignUp /> children', () => {
        const children = shallow(<SignUp />);
        expect(children).to.have.length(1);
    });
    // return children;
});