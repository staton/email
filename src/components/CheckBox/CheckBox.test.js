import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import CheckBox from './CheckBox';

describe('<CheckBox />', () => {

    it('renders correctly when unchecked', () => {
        const wrapper = shallow(<CheckBox isChecked={false} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when checked', () => {
        const wrapper = shallow(<CheckBox isChecked={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('doesn\'t have the ..--checked class when not checked', () => {
        const wrapper = shallow(<CheckBox isChecked={false} />);
        expect(wrapper.find('.CheckBox--checked').length).toEqual(0);
    });

    it('has the ..--checked class when checked', () => {
        const wrapper = shallow(<CheckBox isChecked={true} />);
        expect(wrapper.find('.CheckBox--checked').length).toEqual(1);
    });
    
    it('handles click events', () => {
        const onClick = jest.fn();
        const wrapper = mount(<CheckBox onClick={onClick} />);
        let button = wrapper.find('.CheckBox');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
});