import EMAIL_MANAGER from '../../managers/emailManager';
import { 
    EMAIL_ADD,
    EMAIL_LOAD_IS_BUSY,
    EMAIL_LOAD_SUCCESS
} from '../types';

export const INITIAL_STATE = {
    emails: [],
    isBusy: false,
    selectedEmails: []
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case EMAIL_ADD:

            return addEmails(state, action.payload);

        case EMAIL_LOAD_IS_BUSY:

            return setIsBusyLoadingEmails(state, action.payload);

        case EMAIL_LOAD_SUCCESS:

            return emailsLoaded(state, action.payload);

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
    console.log('addEmails called');
    let emails = state.emails.slice();
    emails.push(...payload.emails);
    // todo: remove nulls (in case of error when adding)

    return { 
        ...state,
        emails: emails
    };
};

const emailsLoaded = (state, payload) => {
    console.log('emailsLoaded called');
    let emails = state.emails.slice();
    emails.push(...JSON.parse(payload.response).emails.map((json) => EMAIL_MANAGER.createEmailFromJson(json)));
    // todo: remove nulls (in case of error when adding)
    
    return {
        ...state,
        emails: emails
    };
};

/**
 * Sets the flag to indicate if the emails are loading.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const setIsBusyLoadingEmails = (state, payload) => {
    console.log('setIsBusyLoadingEmails called');
    return {
        ...state,
        isBusy: payload.isBusy
    };
};