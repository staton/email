import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DrawerMenuItem } from './DrawerMenuItem';

describe('<DrawerMenuItem />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenuItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});