import API_MANAGER from '../../managers/mockApiManager';
import { 
    EMAIL_ADD, 
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_IS_BUSY,
    EMAIL_LOAD_SUCCESS
} from '../types';

export const addEmails = (emails) => {
    return {
        type: EMAIL_ADD,
        payload: {
            emails: emails
        }
    };
};

export const loadEmails = () => {

    return (dispatch) => {
        dispatch(setIsBusyLoadingEmails(true));

        API_MANAGER.loadEmails(
            (response) => {
                dispatch(setIsBusyLoadingEmails(false));
                dispatch(loadEmailsSuccess(response));
            },
            (err) => { 
                dispatch(setIsBusyLoadingEmails(false));
                dispatch(loadEmailsError(err));
            }
        );
    };

};

export const loadEmailsError = (err) => {
    return {
        type: EMAIL_LOAD_ERROR,
        payload: {
            err: err
        }
    };
};

export const loadEmailsSuccess = (response) => {
    return {
        type: EMAIL_LOAD_SUCCESS,
        payload: {
            response: response
        }
    };
};

export const setIsBusyLoadingEmails = (isBusyLoadingEmails) => {
    return {
        type: EMAIL_LOAD_IS_BUSY,
        payload: {
            isBusyLoadingEmails: isBusyLoadingEmails
        }
    };
};
