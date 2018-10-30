import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import {EmailListItemOptions} from './EmailListItemOptions';
import Email from '../../models/email';
import EmailFlags from '../../models/emailFlags';

describe('<EmailListItemOptions />', () => {

    const GET_EMAIL = () => new Email(
        0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello', 'preview', 
        new Date('2018-05-05T12:05:00Z'), null, new EmailFlags(false, false, false, false));

    it('renders correctly', () => {
        const wrapper = shallow(
            <EmailListItemOptions
                email={GET_EMAIL()}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
});