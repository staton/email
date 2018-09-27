import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { SearchBarInput } from './SearchBarInput';

describe('<SearchBarInput />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<SearchBarInput />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('calls all events when triggered', () => {
        const onBlur = jest.fn();
        const onFocus = jest.fn();
        const onKeyPress = jest.fn();
        const wrapper = mount(
            <SearchBarInput 
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
            />
        );
        let input = wrapper.find('input');

        input.simulate('blur');
        expect(onBlur).toHaveBeenCalledTimes(1);

        input.simulate('focus');
        expect(onFocus).toHaveBeenCalledTimes(1);

        input.simulate('keypress');
        expect(onKeyPress).toHaveBeenCalledTimes(1);

        wrapper.unmount();
    });

    it('contains an input with a value equal to the searchText', () => {
        const searchText = "ABcd398352222";
        const wrapper = shallow(<SearchBarInput searchText={searchText} />);
        expect(wrapper.find('input').prop('value')).toEqual(searchText);
    });

});