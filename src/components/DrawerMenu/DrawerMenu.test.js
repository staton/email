import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ComposeEmailButton from '../ComposeEmailButton/ComposeEmailButton';
import DrawerMenuList from '../DrawerMenuList/DrawerMenuList';
import { DrawerMenu } from './DrawerMenu';

describe('<DrawerMenu />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenu />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains a ComposeEmailButton component for large screens', () => {
        const wrapper = shallow(
            <DrawerMenu
                isSmallScreen={false}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(1);
    });

    it('does not contain a ComposeEmailButton component for small screens', () => {
        const wrapper = shallow(
            <DrawerMenu
                isSmallScreen={true}
            />
        );
        expect(wrapper.find(ComposeEmailButton).length).toBe(0);
    });

    it('contains a DrawerMenuList component', () => {
        const wrapper = shallow(<DrawerMenu />);
        expect(wrapper.find(DrawerMenuList).length).toBe(1);
    });

});