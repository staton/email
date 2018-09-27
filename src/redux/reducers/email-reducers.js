import Email from '../../models/email';
import { 
    EMAIL_ADD
} from '../types';

export const INITIAL_STATE = {
    emails: []
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case EMAIL_ADD:

            return addEmails(state, action.payload);

        default:

            return state;
    }

};

/**
 * 
 * @param {object} state The current state.
 * @param {Email[]} payload The emails to add.
 */
const addEmails = (state, payload) => {
    let emails = state.emails.slice();
    emails.push(...payload.emails);

    return { 
        ...state,
        emails: emails
    };
}