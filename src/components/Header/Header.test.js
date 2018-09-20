import React from 'react';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar/SearchBar';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {

    it('renders correctly for small screens', () => {
        const wrapper = shallow(<Header isSmallScreen={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly for large screens', () => {
        const wrapper = shallow(<Header isSmallScreen={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders menu btn, search btn, settings btn, logo, and no search bar for small screens when search bar is hidden', () => {
        const wrapper = shallow(
            <Header 
                isSearchBarVisible={false}
                isSmallScreen={true} 
            />);
        expect(wrapper.find('#header-menu-button').length).toEqual(1);
        expect(wrapper.find('#header-search-button').length).toEqual(1);
        expect(wrapper.find('#header-settings-button').length).toEqual(1);
        expect(wrapper.find('.logo').length).toEqual(1);
        expect(wrapper.find(SearchBar).length).toEqual(0);
    });

    it('renders menu btn, search btn, settings btn, no logo, and search bar for small screens when search bar is visible', () => {
        const wrapper = shallow(
            <Header 
                isSearchBarVisible={true}
                isSmallScreen={true} 
            />);
        expect(wrapper.find('#header-menu-button').length).toEqual(1);
        expect(wrapper.find('#header-search-button').length).toEqual(1);
        expect(wrapper.find('#header-settings-button').length).toEqual(1);
        expect(wrapper.find('.logo').length).toEqual(0);
        expect(wrapper.find(SearchBar).length).toEqual(1);
    });
    
    it('renders menu btn, search btn, settings btn, logo, and search bar for large screens', () => {
        const wrapper = shallow(<Header isSmallScreen={false} />);
        expect(wrapper.find('#header-menu-button').length).toEqual(1);
        expect(wrapper.find('#header-search-button').length).toEqual(0);
        expect(wrapper.find('#header-settings-button').length).toEqual(1);
        expect(wrapper.find('.logo').length).toEqual(1);
        expect(wrapper.find(SearchBar).length).toEqual(1);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is closed (small screens)', () => {
        const isDrawerVisible = false;  // drawer is closed
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <Header 
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={true}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#header-menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is closed (large screens)', () => {
        const isDrawerVisible = false;  // drawer is closed
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <Header 
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={false}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#header-menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setDrawerVisibility when the user clicks on the menu button when drawer is open (large screens)', () => {
        const isDrawerVisible = true;   // drawer is open
        const setDrawerVisibility = jest.fn();
        const wrapper = shallow(
            <Header 
                isDrawerVisible={isDrawerVisible}
                isSmallScreen={false}
                setDrawerVisibility={setDrawerVisibility} 
            />);
        wrapper.find('#header-menu-button').simulate('click');
        expect(setDrawerVisibility).toHaveBeenCalledTimes(1);
        expect(setDrawerVisibility).toHaveBeenCalledWith(!isDrawerVisible);
    });

    it('correctly calls setSearchBarVisibility when the user clicks on the search button when search bar is hidden', () => {
        const isSearchBarVisible = false;   // search bar is hidden
        const setSearchBarVisibility = jest.fn();
        const wrapper = shallow(
            <Header 
                isSearchBarVisible={isSearchBarVisible}
                isSmallScreen={true}
                setSearchBarVisibility={setSearchBarVisibility} 
            />);
        wrapper.find('#header-search-button').simulate('click');
        expect(setSearchBarVisibility).toHaveBeenCalledTimes(1);
        expect(setSearchBarVisibility).toHaveBeenCalledWith(!isSearchBarVisible);
    });

    it('correctly calls setSearchBarVisibility when the user clicks on the search button when search bar is open', () => {
        const isSearchBarVisible = true;   // search bar is open
        const setSearchBarVisibility = jest.fn();
        const wrapper = shallow(
            <Header 
                isSearchBarVisible={isSearchBarVisible}
                isSmallScreen={true}
                setSearchBarVisibility={setSearchBarVisibility} 
            />);
        wrapper.find('#header-search-button').simulate('click');
        expect(setSearchBarVisibility).toHaveBeenCalledTimes(1);
        expect(setSearchBarVisibility).toHaveBeenCalledWith(!isSearchBarVisible);
    });

});