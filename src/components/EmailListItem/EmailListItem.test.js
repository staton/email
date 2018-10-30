import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { EmailListItem } from './EmailListItem';
import Email from '../../models/email';
import EmailFlags from '../../models/emailFlags';
import CheckBox from '../CheckBox/CheckBox';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';
import EmailListItemOptions from '../EmailListItemOptions/EmailListItemOptions';

describe('<EmailListItem />', () => {

    const GET_EMAIL = () => new Email(
        0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello', 'preview', 
        new Date('2018-05-05T12:05:00Z'), null, new EmailFlags(false, false, false, false));

    it('renders correctly', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                setListActive={jest.fn}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('contains a CheckBox for large screen devices', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSmallScreen={false}
                setListActive={jest.fn}
            />);
        expect(wrapper.find(CheckBox).length).toEqual(1);
        expect(wrapper.find(DynamicCheckBox).length).toEqual(0);
    });

    it('contains a DynamicCheckBox for small screen devices', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSmallScreen={true}
                setListActive={jest.fn}
            />);
        expect(wrapper.find(DynamicCheckBox).length).toEqual(1);
        expect(wrapper.find(CheckBox).length).toEqual(0);
    });

    it.skip('handles touch and click events', () => {
        const onClick = jest.fn();
        const onTouchEnd = jest.fn();
        const onTouchMove = jest.fn();
        const onTouchStart = jest.fn();

        const wrapper = mount(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSmallScreen={true}
                setListActive={jest.fn}
                onClick={onClick}
                onTouchEnd={onTouchEnd}
                onTouchMove={onTouchMove}
                onTouchStart={onTouchStart}
            />);

        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
        wrapper.simulate('touchend');
        expect(onTouchEnd).toHaveBeenCalledTimes(1);
        wrapper.simulate('touchmove');
        expect(onTouchMove).toHaveBeenCalledTimes(1);
        wrapper.simulate('touchstart');
        expect(onTouchStart).toHaveBeenCalledTimes(1);
    });

    it('has the ..--read class name if the email is read', () => {
        const email = GET_EMAIL();
        email.Flags.IsUnread = false;
        const wrapper = shallow(
            <EmailListItem 
                email={email}
                isListActive={false}
                setListActive={jest.fn}
            />);
        expect(wrapper.find('.EmailListItem__container--read').length).toEqual(1);
    });

    it('does not have the ..--read class name if the email is unread', () => {
        const email = GET_EMAIL();
        email.Flags.IsUnread = true;
        const wrapper = shallow(
            <EmailListItem 
                email={email}
                isListActive={false}
                setListActive={jest.fn}
            />);
        expect(wrapper.find('.EmailListItem__container--read').length).toEqual(0);
    });

    it('has the ..--swiped-open class name if the email is swiped open', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSwipedOpen={true}
                setListActive={jest.fn}
            />);
        expect(wrapper.find('.EmailListItem__container--swiped-open').length).toEqual(1);
    });

    it('does not have the ..--swiped-open class name if the email is not swiped open', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSwipedOpen={false}
                setListActive={jest.fn}
            />);
        expect(wrapper.find('.EmailListItem__container--swiped-open').length).toEqual(0);
    });

    it('has EmailListItemOptions for small screen devices', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSmallScreen={true}
                setListActive={jest.fn}
            />);
        expect(wrapper.find(EmailListItemOptions).length).toEqual(1);
    });

    it('does not have EmailListItemOptions for large screen devices', () => {
        const wrapper = shallow(
            <EmailListItem 
                email={GET_EMAIL()}
                isListActive={false}
                isSmallScreen={false}
                setListActive={jest.fn}
            />);
        expect(wrapper.find(EmailListItemOptions).length).toEqual(0);
    });

});