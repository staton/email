import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { SearchBarButton } from './SearchBarButton';

describe('<SearchBarButton />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <SearchBarButton 
                content="X"
                id="btn-id"
                title="Search"
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('handles click events', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <SearchBarButton 
                content="X"
                id="btn-id"
                onClick={onClick}
            />);
        let button = wrapper.find('button');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});