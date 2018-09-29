import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import ScreenOverlay from './ScreenOverlay';

describe('<ScreenOverlay />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <ScreenOverlay 
                isVisible={true}
                zIndex={12}
            />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has correct classes to handle visibility when it should be visible', () => {
        const wrapper = shallow(
            <ScreenOverlay
                isVisible={true}
                zIndex={12}
            />);
        expect(wrapper.find('.ScreenOverlay').length).toEqual(1);
        expect(wrapper.find('.ScreenOverlay--hidden').length).toEqual(0);
    });

    it('has correct classes to handle drawer visibility when it should be hidden', () => {
        const wrapper = shallow(
            <ScreenOverlay
                isVisible={false}
                zIndex={12}
            />);
        expect(wrapper.find('.ScreenOverlay').length).toEqual(1);
        expect(wrapper.find('.ScreenOverlay--hidden').length).toEqual(1);
    });

    it('calls onClick when clicked', () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <ScreenOverlay
                isVisible={true}
                onClick={onClick}
                zIndex={12}
            />
        );
        wrapper.find('.ScreenOverlay').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});