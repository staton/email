import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
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

});