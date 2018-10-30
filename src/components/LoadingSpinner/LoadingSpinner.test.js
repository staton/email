import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingSpinner />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<LoadingSpinner />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
});