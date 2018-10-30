import {
    USER_SET_LOGGING_IN,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS
} from '../types';
import API_MANAGER from '../../managers/mockApiManager';
import {loadEmails} from '../actions/email-actions';

/**
 * Logs the user into the app.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 */
export const userLogin = (email, password) => {
    console.log('userLogin called');
    return (dispatch) => {
        dispatch(setIsLoggingIn(true));
        
        API_MANAGER.login(
            email, 
            password, 
            (response) => {
                dispatch(userLoginSuccess(response));
                dispatch(setIsLoggingIn(false));
                dispatch(loadEmails());
            },
            (err) => {
                dispatch(userLoginFailure(err));
                dispatch(setIsLoggingIn(false));
            });
    };
};

/**
 * Sets the logging in state.
 * @param {boolean} isLoggingIn The logging in state.
 */
const setIsLoggingIn = (isLoggingIn) => {
    return {
        type: USER_SET_LOGGING_IN,
        payload: {
            isLoggingIn: isLoggingIn
        }
    }
};

/**
 * Called when the user successfully logs in.
 * @param {string} response The JSON response.
 */
const userLoginSuccess = (response) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: {
            response: response
        }
    };
};

/**
 * Called if an error occurs when logging in.
 * @param {string} err The JSON response.
 */
const userLoginFailure = (err) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: {
            err: err
        }
    };
};