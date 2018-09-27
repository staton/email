import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { ComposeEmailButton } from './ComposeEmailButton';

describe('<ComposeEmailButton />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <ComposeEmailButton 
                content="New Email"
                title="Search"
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('handles click events', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <ComposeEmailButton 
                content="New Email"
                onClick={onClick}
            />);
        let button = wrapper.find('button');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});