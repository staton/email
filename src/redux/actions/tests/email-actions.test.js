import * as actions from '../email-actions';
import Email from '../../../models/email';
import {
    EMAIL_ADD
} from '../../types';

describe('email-actions action creators', () => {

    it('creates an action to add emails', () => {
        const emails = [
            new Email(),
            new Email()
        ];
        const expectedAction = {
            type: EMAIL_ADD,
            payload: {
                emails: emails
            }
        };

        expect(actions.addEmails(emails)).toEqual(expectedAction);
    });

});