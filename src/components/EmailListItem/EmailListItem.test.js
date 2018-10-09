import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { EmailListItem } from './EmailListItem';
import Email from '../../models/email';
import EmailFlags from '../../models/emailFlags';

describe('<EmailListItem />', () => {

    const GET_EMAIL = () => new Email(
        0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello', 'preview', 
        new Date('2018-05-05T12:05:00Z'), null, new EmailFlags(false, false, false, false));

    it('renders correctly', () => {
        const wrapper = shallow(<EmailListItem email={GET_EMAIL()}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});