import * as actions from '../email-actions';
import Email from '../../../models/email';
import {
    EMAIL_ADD, EMAIL_LOAD_ERROR, EMAIL_LOAD_SUCCESS, EMAIL_LOAD_IS_BUSY
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

    it('creates an action when loading emails errors', () => {
        const errorObj = { message: '404' };
        const expectedAction = {
            type: EMAIL_LOAD_ERROR,
            payload: {
                err: errorObj
            }
        };

        expect(actions.loadEmailsError(errorObj)).toEqual(expectedAction);
    });

    it('creates an action when loading emails is successful', () => {
        const json = '{ "emails": [ { "id": 0 }, { "id": 1 } ] }';
        const expectedAction = {
            type: EMAIL_LOAD_SUCCESS,
            payload: {
                response: json
            }
        };

        expect(actions.loadEmailsSuccess(json)).toEqual(expectedAction);
    });

    it('creates an action to set the "emails loading" indicator', () => {
        const isBusyLoadingEmails = true;
        const expectedAction = {
            type: EMAIL_LOAD_IS_BUSY,
            payload: {
                isBusyLoadingEmails: isBusyLoadingEmails
            }
        };

        expect(actions.setIsBusyLoadingEmails(isBusyLoadingEmails)).toEqual(expectedAction);
    });

});