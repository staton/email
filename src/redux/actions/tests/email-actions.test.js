import * as actions from '../email-actions';
import * as types from '../../types';
import Email from '../../../models/email';

describe('email-actions action creators', () => {

    it('creates an action to add emails', () => {
        const emails = [
            new Email(),
            new Email()
        ];
        const expectedAction = {
            type: types.EMAIL_ADD,
            payload: {
                emails: emails
            }
        };

        expect(actions.addEmails(emails)).toEqual(expectedAction);
    });

});