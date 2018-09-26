import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';
import SearchBarButton from './SearchBarButton/SearchBarButton';
import SearchBarInput from './SearchBarInput/SearchBarInput';

describe('<SearchBar />', () => {

    it('renders correctly with no text', () => {
        const wrapper = shallow(<SearchBar searchText="" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly with text', () => {
        const wrapper = shallow(<SearchBar searchText="hello" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('contains an input and search button when input contains no text', () => {
        const wrapper = shallow(<SearchBar searchText="" />);
        expect(wrapper.find(SearchBarInput).length).toEqual(1);
        expect(wrapper.find(SearchBarButton).length).toEqual(1);
        //expect(wrapper.find('#search-bar-search-button').length).toEqual(1);
        //expect(wrapper.find('#search-bar-clear-button').length).toEqual(0);
    });

    it('contains an input, search button, and clear button when input contains text', () => {
        const wrapper = shallow(<SearchBar searchText="hello" />);
        expect(wrapper.find(SearchBarInput).length).toEqual(1);
        expect(wrapper.find(SearchBarButton).length).toEqual(2);
        //expect(wrapper.find('#search-bar-search-button').length).toEqual(1);
        //expect(wrapper.find('#search-bar-clear-button').length).toEqual(1);
    });

});