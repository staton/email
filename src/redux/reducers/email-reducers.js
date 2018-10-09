import EMAIL_MANAGER from '../../managers/emailManager';
import { 
    EMAIL_ADD,
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_IS_BUSY,
    EMAIL_LOAD_SUCCESS
} from '../types';

export const INITIAL_STATE = {
    emails: [],
    didErrorLoadingEmails: false,
    isBusyLoadingEmails: false,
    selectedEmails: []
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case EMAIL_ADD:

            return addEmails(state, action.payload);

        case EMAIL_LOAD_ERROR:

            return setDidErrorLoadingEmails(state, action.payload);

        case EMAIL_LOAD_IS_BUSY:

            return setIsBusyLoadingEmails(state, action.payload);

        case EMAIL_LOAD_SUCCESS:

            return loadEmails(state, action.payload);

        default:

            return state;
    }

};

/**
 * Adds emails to the list of emails.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const addEmails = (state, payload) => {
    let emails = state.emails.slice();
    emails.push(...payload.emails);
    // todo: remove nulls (in case of error when adding)

    return { 
        ...state,
        emails: emails
    };
};

/**
 * Takes the emails (in JSON form) that was loaded from the server,
 * transforms them into Email objects, and adds them to the list of emails.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const loadEmails = (state, payload) => {
    let emails = state.emails.slice();
    emails.push(...JSON.parse(payload.response).emails.map((json) => EMAIL_MANAGER.createEmailFromJson(json)));
    // todo: remove nulls (in case of error when adding)
    
    return {
        ...state,
        didErrorLoadingEmails: false,
        emails: emails
    };
};

/**
 * Sets the 'didErrorLoadingEmails' flag to true.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const setDidErrorLoadingEmails = (state, payload) => {
    console.warn(payload.err);
    return {
        ...state,
        didErrorLoadingEmails: true
    }
};

/**
 * Sets the flag to indicate if the emails are loading.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const setIsBusyLoadingEmails = (state, payload) => {
    return {
        ...state,
        isBusyLoadingEmails: payload.isBusyLoadingEmails
    };
};