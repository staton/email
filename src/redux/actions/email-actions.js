import API_MANAGER from '../../managers/mockApiManager';
import LoadingOverlayState from '../../enums/LoadingOverlay';
import { EMAIL_OVERLAY_FADE_SPEED } from '../../resources/constants';
import { 
    EMAIL_ADD, 
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_SUCCESS,
    EMAIL_LOADING_OVERLAY_STATE
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
        dispatch(setEmailLoadingOverlayState(LoadingOverlayState.Visible));

        API_MANAGER.loadEmails(
            (response) => {
                dispatch(loadEmailsSuccess(response));
                dispatch(setEmailLoadingOverlayState(LoadingOverlayState.Fading));
                setTimeout(() => {
                    dispatch(setEmailLoadingOverlayState(LoadingOverlayState.None));
                }, EMAIL_OVERLAY_FADE_SPEED + 50);
            },
            (err) => { 
                dispatch(loadEmailsError(err));
                dispatch(setEmailLoadingOverlayState(LoadingOverlayState.None));
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

export const setEmailLoadingOverlayState = (loadingOverlayState) => {
    return {
        type: EMAIL_LOADING_OVERLAY_STATE,
        payload: {
            loadingOverlayState: loadingOverlayState
        }
    };
};
