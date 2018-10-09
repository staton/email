import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { EmailListItem } from './EmailListItem';

describe('<EmailListItem />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<EmailListItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});