import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { HeaderButton } from './HeaderButton';

describe('<HeaderButton />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <HeaderButton 
                content="X" 
                id="my-button"
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('calls onClick when clicked', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <HeaderButton 
                content="X" 
                id="my-button"
                onClick={onClick}
            />);
        const button = wrapper.find('button');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
});