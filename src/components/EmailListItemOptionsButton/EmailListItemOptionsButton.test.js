import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import EmailListItemOptionsButton from './EmailListItemOptionsButton';

describe('<EmailListItemOptionsButton />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <EmailListItemOptionsButton
                className="EmailListItemOptionsButton__delete"
                content="X" 
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('handles click events', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <EmailListItemOptionsButton
                className="EmailListItemOptionsButton__delete"
                content="X" 
                onClick={onClick}
            />);
        const icon = wrapper.find('.EmailListItemOptionsButton');
        icon.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
});