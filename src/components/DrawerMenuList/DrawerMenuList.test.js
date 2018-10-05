import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DrawerMenuList } from './DrawerMenuList';

describe('<DrawerMenuList />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenuList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});