import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import EmailListItemIcon from './EmailListItemIcon';

describe('<EmailListItemIcon />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <EmailListItemIcon
                content="X" 
                isVisible={true}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has the ..--visible class when visible', () => {
        const wrapper = shallow(
            <EmailListItemIcon
                content="X" 
                isVisible={true}
            />);
        expect(wrapper.find('.EmailListItemIcon--visible').length).toEqual(1);
    });

    it('does not have the ..--visible class when not visible', () => {
        const wrapper = shallow(
            <EmailListItemIcon
                content="X" 
                isVisible={false}
            />);
        expect(wrapper.find('.EmailListItemIcon--visible').length).toEqual(0);
    });

    it('handles click events', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <EmailListItemIcon
                content="X" 
                isVisible={true}
                onClick={onClick}
            />);
        const icon = wrapper.find('.EmailListItemIcon');
        icon.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
});