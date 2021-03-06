import API_MANAGER from '../../managers/mockApiManager';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import { 
    EMAIL_ADD, 
    EMAIL_LIST_ITEM_SWIPED,
    EMAIL_DRAFT_ITEMS_ACTIVE,
    EMAIL_INBOX_ITEMS_ACTIVE,
    EMAIL_SENT_ITEMS_ACTIVE,
    EMAIL_SPAM_ITEMS_ACTIVE,
    EMAIL_TRASH_ITEMS_ACTIVE,
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_SUCCESS,
    EMAIL_LOADING_OVERLAY_STATE,
    EMAIL_SELECT
} from '../types';

/**
 * Adds email(s).
 * @param {Email[]} emails The emails to add.
 * @returns {object}
 */
export const addEmails = (emails) => {
    return {
        type: EMAIL_ADD,
        payload: {
            emails: emails
        }
    };
};

/**
 * Initially loads the emails from the API.
 * @param {number} loadingOverlayFadeOutSpeed The number of ms it takes to fade out the loading overlay.
 * @returns {object}
 */
export const loadEmails = (loadingOverlayFadeOutSpeed) => {

    return (dispatch) => {
        dispatch(setEmailLoadingOverlayState(LoadingOverlayState.Visible));

        API_MANAGER.loadEmails(
            (response) => {
                dispatch(loadEmailsSuccess(response));
                dispatch(setEmailLoadingOverlayState(LoadingOverlayState.Fading));
                setTimeout(() => {
                    dispatch(setEmailLoadingOverlayState(LoadingOverlayState.None));
                }, loadingOverlayFadeOutSpeed + 10);
            },
            (err) => { 
                dispatch(loadEmailsError(err));
                dispatch(setEmailLoadingOverlayState(LoadingOverlayState.None));
            }
        );
    };

};

/**
 * Called when emails are not loaded successfully.
 * @param {object} err The error object.
 * @returns {object}
 */
export const loadEmailsError = (err) => {
    return {
        type: EMAIL_LOAD_ERROR,
        payload: {
            err: err
        }
    };
};

/**
 * Called when emails are successfully loaded.
 * @param {object} response The response object.
 * @returns {object}
 */
export const loadEmailsSuccess = (response) => {
    return {
        type: EMAIL_LOAD_SUCCESS,
        payload: {
            response: response
        }
    };
};

/**
 * Selects or deselects email(s).
 * @param {Email[]} emails The email(s) to select.
 * @param {boolean} isSelected Indicates if the email(s) are selected or not.
 * @returns {object}
 */
export const selectEmail = (emails, isSelected) => {
    return {
        type: EMAIL_SELECT,
        payload: {
            emails: emails,
            isSelected: isSelected
        }
    };
};

/**
 * Sets the draft list items to an active state, allowing the dynamic checkboxes
 * to be selected (small screen devices only).
 * @param {boolean} isActive Indicates if the email list items are active or not.
 */
export const setDraftListItemsActive = (isActive) => {
    return {
        type: EMAIL_DRAFT_ITEMS_ACTIVE,
        payload: {
            isActive: isActive
        }
    };
};

/**
 * Sets the inbox list items to an active state, allowing the dynamic checkboxes
 * to be selected (small screen devices only).
 * @param {boolean} isActive Indicates if the email list items are active or not.
 */
export const setInboxListItemsActive = (isActive) => {
    return {
        type: EMAIL_INBOX_ITEMS_ACTIVE,
        payload: {
            isActive: isActive
        }
    };
};

/**
 * Sets the sent list items to an active state, allowing the dynamic checkboxes
 * to be selected (small screen devices only).
 * @param {boolean} isActive Indicates if the email list items are active or not.
 */
export const setSentListItemsActive = (isActive) => {
    return {
        type: EMAIL_SENT_ITEMS_ACTIVE,
        payload: {
            isActive: isActive
        }
    };
};

/**
 * Sets the spam list items to an active state, allowing the dynamic checkboxes
 * to be selected (small screen devices only).
 * @param {boolean} isActive Indicates if the email list items are active or not.
 */
export const setSpamListItemsActive = (isActive) => {
    return {
        type: EMAIL_SPAM_ITEMS_ACTIVE,
        payload: {
            isActive: isActive
        }
    };
};

/**
 * Sets the trash list items to an active state, allowing the dynamic checkboxes
 * to be selected (small screen devices only).
 * @param {boolean} isActive Indicates if the email list items are active or not.
 */
export const setTrashListItemsActive = (isActive) => {
    return {
        type: EMAIL_TRASH_ITEMS_ACTIVE,
        payload: {
            isActive: isActive
        }
    };
};

/**
 * Updates the loading overlay state.
 * @param {LoadingOverlay} loadingOverlayState The loading overlay state.
 * @returns {object}
 */
export const setEmailLoadingOverlayState = (loadingOverlayState) => {
    return {
        type: EMAIL_LOADING_OVERLAY_STATE,
        payload: {
            loadingOverlayState: loadingOverlayState
        }
    };
};

/**
 * Updates the current swiped emails list.
 * @param {Email[]} emails The email(s) to update.
 * @param {boolean} isSwipedOpen The swiped open status.
 * @returns {object}
 */
export const updateCurrentSwipedEmails = (emails, isSwipedOpen) => {
    return {
        type: EMAIL_LIST_ITEM_SWIPED,
        payload: {
            emails: emails,
            isSwipedOpen: isSwipedOpen
        }
    };
};