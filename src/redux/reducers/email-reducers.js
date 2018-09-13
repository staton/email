import Email from '../../models/email';
import { 
    ADD_EMAIL,
    SET_SEARCH_TEXT
} from '../types';


const INITIAL_STATE = {
    emails: [],
    searchText: ''
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_EMAIL:

            return addEmails(state, action.payload);

        case SET_SEARCH_TEXT:

            return { 
                ...state,
                searchText: action.payload.searchText
            };

        default:

            return state;
    }

};

/**
 * 
 * @param {object} state The current state.
 * @param {Email[]} payload The emails to add.
 */
function addEmails(state, payload) {
    let emails = state.emails.slice();
    emails.push(...payload.emails);

    return {
        ...state,       // returns the other properties
        emails: emails  // and the updated emails 
    };
}