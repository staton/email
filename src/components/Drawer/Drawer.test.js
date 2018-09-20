import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Drawer } from './Drawer';

describe('<Drawer />', () => {

    it('renders correctly for small screens', () => {
        const wrapper = shallow(<Drawer isSmallScreen={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly for large screens', () => {
        const wrapper = shallow(<Drawer isSmallScreen={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has classes to handle drawer visibility for small screens when drawer should be visible', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={true} 
            />);
        expect(wrapper.find('.drawer-content').length).toEqual(1);
        expect(wrapper.find('.drawer-content-visible').length).toEqual(1);
        expect(wrapper.find('.drawer-shadow').length).toEqual(1);
        expect(wrapper.find('.drawer-shadow-visible').length).toEqual(1);
    });

    it('has classes to handle drawer visibility for large screens when drawer should be visible', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={false} 
            />);
            expect(wrapper.find('.drawer-content').length).toEqual(1);
            expect(wrapper.find('.drawer-content-visible').length).toEqual(1);
            expect(wrapper.find('.drawer-shadow').length).toEqual(0);
            expect(wrapper.find('.drawer-shadow-visible').length).toEqual(0);
    });

    it('does not have classes to handle drawer visibility for small screens when drawer should be hidden', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={false}
                isSmallScreen={true} 
            />);
        expect(wrapper.find('.drawer-content').length).toEqual(1);
        expect(wrapper.find('.drawer-content-visible').length).toEqual(0);
        expect(wrapper.find('.drawer-shadow').length).toEqual(1);
        expect(wrapper.find('.drawer-shadow-visible').length).toEqual(0);
    });

    it('does not have classes to handle drawer visibility for large screens when drawer should be hidden', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={false}
                isSmallScreen={false} 
            />);
            expect(wrapper.find('.drawer-content').length).toEqual(1);
            expect(wrapper.find('.drawer-content-visible').length).toEqual(0);
            expect(wrapper.find('.drawer-shadow').length).toEqual(0);
            expect(wrapper.find('.drawer-shadow-visible').length).toEqual(0);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the drawer shadow', () => {
        const isDrawerVisible = true;
        const setDrawerVisibility = jest.fn();
        const wrapper = mount(
            <Drawer
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={true}
                setDrawerVisibility={setDrawerVisibility}
            />
        );
        wrapper.find('.drawer-shadow').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(false); // should always be called with false
    });

});