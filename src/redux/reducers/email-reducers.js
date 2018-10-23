import EMAIL_MANAGER from '../../managers/emailManager';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import { 
    EMAIL_ADD,
    EMAIL_LIST_ITEM_SWIPED,
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_SUCCESS,
    EMAIL_LOADING_OVERLAY_STATE,
    EMAIL_SELECT
} from '../types';
import Email from '../../models/email';
import _ from 'lodash';

export const INITIAL_STATE = {
    emails: [],
    currentSwipedEmails: [],
    didErrorLoadingEmails: false,
    loadingOverlayState: LoadingOverlayState.None,
    selectedEmails: []
};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case EMAIL_ADD:

            return addEmails(state, action.payload);

        case EMAIL_LIST_ITEM_SWIPED:

            return updateCurrentSwipedEmails(state, action.payload);

        case EMAIL_LOAD_ERROR:

            return setDidErrorLoadingEmails(state, action.payload);

        case EMAIL_LOADING_OVERLAY_STATE:

            return setEmailLoadingOverlayState(state, action.payload);

        case EMAIL_LOAD_SUCCESS:

            return loadEmails(state, action.payload);

        case EMAIL_SELECT:

            return selectEmail(state, action.payload);

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
        emails: EMAIL_MANAGER.sortEmailsByDate(emails, false)
    };
};

/**
 * Selects or unselects an email in the email list.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const selectEmail = (state, payload) => {
    let selectedEmails = state.selectedEmails.slice();
    let isAlreadySelected = EMAIL_MANAGER.isEmailInArray(selectedEmails, payload.email);

    if (isAlreadySelected && !payload.isSelected) {
        selectedEmails = EMAIL_MANAGER.removeEmailFromArray(selectedEmails, payload.email);
    } else if (!isAlreadySelected && payload.isSelected) {
        selectedEmails.push(payload.email);
    }

    return {
        ...state,
        selectedEmails: selectedEmails
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
const setEmailLoadingOverlayState = (state, payload) => {
    return {
        ...state,
        loadingOverlayState: payload.loadingOverlayState
    };
};

/**
 * Adds or removed the email from the list of emails that
 * have currently been 'swiped' on the email list page.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const updateCurrentSwipedEmails = (state, payload) => {
    let currentSwipedEmails = state.currentSwipedEmails.slice();
    if (payload.isSwipedOpen) {
        // swiped left, so add the email to the list (if not already added):
        if (!_.head(_.filter(currentSwipedEmails, (o) => o.Id === payload.email.Id))) {
            currentSwipedEmails.push(payload.email);
        }
    } else {
        // swiped right, so try to remove the email from the list:
        currentSwipedEmails = EMAIL_MANAGER.removeEmailFromArray(currentSwipedEmails, payload.email); 
        //_.reject(currentSwipedEmails, (o) => o.Id === payload.email.Id);
    }

    return {
        ...state,
        currentSwipedEmails: currentSwipedEmails
    };
};