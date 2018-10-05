import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DrawerMenuListItem } from './DrawerMenuListItem';

describe('<DrawerMenuListItem />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenuListItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});