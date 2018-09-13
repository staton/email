import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import { SearchBar } from './SearchBar';
import { setSearchText } from '../../redux/actions/email-actions';

describe('<SearchBar />', () => {

    const GET_PROPS = () => {
        return {
            searchText: '',
            setSearchText: setSearchText
        }
    };

    Enzyme.configure({ adapter: new Adapter() });

    it('renders correctly', () => {
        const wrapper = shallow(<SearchBar {...GET_PROPS()} />);
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });
    
    it('contains the correct child elements', () => {
        const wrapper = shallow(<SearchBar {...GET_PROPS()} />);
        expect(wrapper.find('.search-bar-button-search').length).toEqual(1);
        expect(wrapper.find('.search-bar-input').length).toEqual(1);
        expect(wrapper.find('.search-bar-button-clear').length).toEqual(1);
        wrapper.unmount();
    });

    // need to have a mock store to test this properly...:
    /*
    it('hides the clear search button when input does not contain text', () => {
        const wrapper = mount(<SearchBar {...GET_PROPS()} />);
        const searchInput = wrapper.find('.search-bar-input');
        const clearSearchButton = wrapper.find('.search-bar-button-clear');
        wrapper.instance().handleSearchTextChanged({ target: { value: ''} });
        expect(clearSearchButton.prop('style')).toHaveProperty('display', 'none');
        wrapper.unmount();
    });
    
    it('displays the clear search button when input contains text', () => {
        const wrapper = mount(<SearchBar {...GET_PROPS()} />);
        const searchInput = wrapper.find('.search-bar-input');
        const clearSearchButton = wrapper.find('.search-bar-button-clear');
        wrapper.instance().handleSearchTextChanged({ target: { value: 'foo'} });
        //wrapper.instance().value = 'foo';
        expect(clearSearchButton.prop('style')).toHaveProperty('display', 'block');
        wrapper.unmount();
    });
    */

});