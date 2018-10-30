import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ListSelectionHeader } from './ListSelectionHeader';
import Email from '../../models/email';

describe('<ListSelectionHeader />', () => {

    it('renders correctly', () => {
        const wrapper = shallow(
            <ListSelectionHeader
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                selectedEmails={[]}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('has a back button and a delete button', () => {
        const wrapper = shallow(
            <ListSelectionHeader
                leftElementGroupClassName="Header__left-element-group"
                rightElementGroupClassName="Header__right-element-group"
                elementClassName="Header__element"
                selectedEmails={[]}
            />);
        expect(wrapper.find('#ListSelectionHeader__back-button').length).toEqual(1);
        expect(wrapper.find('#ListSelectionHeader__delete-button').length).toEqual(1);
    });
    
});