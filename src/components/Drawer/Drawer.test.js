import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Drawer } from './Drawer';

describe('<Drawer />', () => {

    it('renders correctly for small screens', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={true} 
            />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly for large screens', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={false} 
            />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has classes to handle drawer visibility for small screens when drawer should be visible', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={true} 
            />
        );
        expect(wrapper.find('.Drawer__content').length).toEqual(1);
        expect(wrapper.find('.Drawer__content--hidden').length).toEqual(0);
    });

    it('has classes to handle drawer visibility for large screens when drawer should be visible', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={true}
                isSmallScreen={false} 
            />
        );
        expect(wrapper.find('.Drawer__content').length).toEqual(1);
        expect(wrapper.find('.Drawer__content--hidden').length).toEqual(0);
    });

    it('does not have classes to handle drawer visibility for small screens when drawer should be hidden', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={false}
                isSmallScreen={true} 
            />
        );
        expect(wrapper.find('.Drawer__content').length).toEqual(1);
        expect(wrapper.find('.Drawer__content--hidden').length).toEqual(1);
    });

    it('does not have classes to handle drawer visibility for large screens when drawer should be hidden', () => {
        const wrapper = shallow(
            <Drawer 
                isDrawerVisible={false}
                isSmallScreen={false} 
            />
        );
        expect(wrapper.find('.Drawer__content').length).toEqual(1);
        expect(wrapper.find('.Drawer__content--hidden').length).toEqual(1);
    });

});