import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});


