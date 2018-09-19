import * as actions from '../../actions/email-actions';
import emailReducer from '../email-reducers';
import Email from '../../../models/email';

describe('email-reducers', () => {

    const INITIAL_STATE = {
        emails: []
    };

    it('returns the initial state', () => {
        expect(emailReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('adds emails to the list of emails', () => {
        const state = Object.assign({}, INITIAL_STATE);
        const emails = state.emails.slice();
        emails.push([
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