import React from 'react';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar/SearchBar';
import { shallow } from 'enzyme';
import { MainHeader } from './MainHeader';

describe('<MainHeader />', () => {

    it('renders correctly for small screens', () => {
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isSmallScreen={true}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly for large screens', () => {
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isSmallScreen={false} 
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('renders menu btn, search btn, settings btn, logo, and search bar for large screens', () => {
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isSmallScreen={false} 
            />);
        expect(wrapper.find('#MainHeader__menu-button').length).toEqual(1);
        expect(wrapper.find('#MainHeader__search-button').length).toEqual(0);
        expect(wrapper.find('#MainHeader__settings-button').length).toEqual(1);
        expect(wrapper.find('.MainHeader__logo').length).toEqual(1);
        expect(wrapper.find(SearchBar).length).toEqual(1);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is closed (small screens)', () => {
        const isDrawerVisible = false;  // drawer is closed
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={true}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#MainHeader__menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is closed (large screens)', () => {
        const isDrawerVisible = false;  // drawer is closed
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={false}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#MainHeader__menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is open (large screens)', () => {
        const isDrawerVisible = true;   // drawer is open
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={false}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#MainHeader__menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setSearchBarVisibility when the user clicks on the search button when search bar is hidden', () => {
        const isSearchBarVisible = false;   // search bar is hidden
        const setSearchBarVisibility = jest.fn();
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isSearchBarVisible={isSearchBarVisible}
                isSmallScreen={true}
                setSearchBarVisibility={setSearchBarVisibility} 
            />);
        wrapper.find('#MainHeader__search-button').simulate('click');
        expect(setSearchBarVisibility).toHaveBeenCalledTimes(1);
        expect(setSearchBarVisibility).toHaveBeenCalledWith(!isSearchBarVisible);
    });

    it('correctly calls setSearchBarVisibility when the user clicks on the search button when search bar is open', () => {
        const isSearchBarVisible = true;   // search bar is open
        const setSearchBarVisibility = jest.fn();
        const wrapper = shallow(
            <MainHeader 
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                isSearchBarVisible={isSearchBarVisible}
                isSmallScreen={true}
                setSearchBarVisibility={setSearchBarVisibility} 
            />);
        wrapper.find('#MainHeader__search-button').simulate('click');
        expect(setSearchBarVisibility).toHaveBeenCalledTimes(1);
        expect(setSearchBarVisibility).toHaveBeenCalledWith(!isSearchBarVisible);
    });

});