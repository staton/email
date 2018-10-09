import API_MANAGER from '../../managers/mockApiManager';
import { 
    EMAIL_ADD, 
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

        dispatch(loadEmailsIsBusy(true));

        API_MANAGER.loadEmails(
            (response) => {
                dispatch(loadEmailsIsBusy(false));
                dispatch(loadEmailsSuccess(response));
            },
            () => dispatch(loadEmailsIsBusy(false))
        );

    };

};

const loadEmailsIsBusy = (isBusy) => {
    return {
        type: EMAIL_LOAD_IS_BUSY,
        payload: {
            isBusy: isBusy
        }
    };
};

const loadEmailsSuccess = (response) => {
    return {
        type: EMAIL_LOAD_SUCCESS,
        payload: {
            response: response
        }
    };
};
