import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import DynamicCheckBox from './DynamicCheckBox';
import {MdCheck} from 'react-icons/md';

describe('<DynamicCheckBox />', () => {

    it('renders correctly when not active and unchecked', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={false}
                isChecked={false} 
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when active and unchecked', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={true}
                isChecked={false} 
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders correctly when active and checked', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={true}
                isChecked={true} 
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has a check icon when checked', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={true}
                isChecked={true} 
            />);
        expect(wrapper.find(MdCheck).length).toEqual(1);
        expect(wrapper.find('.DynamicCheckBox__check--checked').length).toEqual(1);
    });

    it('does not have a check icon when unchecked', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={true}
                isChecked={false} 
            />);
        expect(wrapper.find(MdCheck).length).toEqual(0);
        expect(wrapper.find('.DynamicCheckBox__check--checked').length).toEqual(0);
    });

    it('has the .card--is-flipped class when active', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={true}
            />);
        expect(wrapper.find('.card--is-flipped').length).toEqual(1);
    });

    it('does not have the .card--is-flipped class when not active', () => {
        const wrapper = shallow(
            <DynamicCheckBox 
                isActive={false}
            />);
        expect(wrapper.find('.card--is-flipped').length).toEqual(0);
    });
    
    it('handles click events when active', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <DynamicCheckBox 
                isActive={true}
                onClick={onClick} 
            />);
        let button = wrapper.find('.DynamicCheckBox');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('ignores click events when not active', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <DynamicCheckBox 
                isActive={false}
                onClick={onClick} 
            />);
        let button = wrapper.find('.DynamicCheckBox');

        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(0);
    });
    
});