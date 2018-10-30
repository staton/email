import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { DrawerMenuListItem } from './DrawerMenuListItem';

describe('<DrawerMenuListItem />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<DrawerMenuListItem primaryContent="Text" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains a secondary content div when there is secondary content', () => {
        const wrapper = shallow(
            <DrawerMenuListItem 
                primaryContent="Text"
                secondaryContent="abc"
            />
        );
        expect(wrapper.find('.DrawerMenuListItem__secondary-content').length).toBe(1);
    });

    it('does not contain a secondary content div when there is no secondary content', () => {
        const wrapper = shallow(<DrawerMenuListItem primaryContent="Text" />);
        expect(wrapper.find('.DrawerMenuListItem__secondary-content').length).toBe(0);
    });

    it('hides the drawer when clicked on small screen devices', () => {
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <DrawerMenuListItem 
                isSmallScreen={true}
                primaryContent="Text"
                secondaryContent="abc"
                setDrawerVisibility={setDrawerVisibility}
            />);
        wrapper.simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(false);
    });

});