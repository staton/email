import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { EmailList } from './EmailList';

describe('<EmailList />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<EmailList emails={[]} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});