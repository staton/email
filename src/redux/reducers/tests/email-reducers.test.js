import * as actions from '../../actions/email-actions';
import emailReducer, { INITIAL_STATE } from '../email-reducers';
import Email from '../../../models/email';

describe('email-reducers', () => {

    it('returns the initial state', () => {
        expect(emailReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('adds emails to the list of emails', () => {
        const state = { ...INITIAL_STATE };
        const emails = state.emails.slice();
        emails.push(...[
            new Email(),
            new Email(),
            new Email()
        ]);
        const expectedState = {
            ...state,
            emails: emails
        };
        const action = actions.addEmails(emails);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

});