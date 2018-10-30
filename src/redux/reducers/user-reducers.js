import {
    USER_SET_LOGGING_IN,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS
} from '../types';
import USER from '../../models/user';

export const INITIAL_STATE = {
    didErrorLoggingIn: false,
    isLoggedIn: false,
    isLoggingIn: false,
    user: USER
}

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {

        case USER_SET_LOGGING_IN:

            return setIsLoggingIn(state, action.payload);

        case USER_LOGIN_FAILURE:

            return userLoginFailure(state, action.payload);

        case USER_LOGIN_SUCCESS:

            return userLoginSuccess(state, action.payload);

        default:

            return state;
    }

}

/**
 * Sets the 'isLoggingIn' state, to indicate if the user is currently logging in or not.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const setIsLoggingIn = (state, payload) => {
    return {
        ...state,
        isLoggingIn: payload.isLoggingIn
    };
};

/**
 * Sets the user login failure message.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const userLoginFailure = (state, payload) => {
    return {
        ...state,
        didErrorLoggingIn: true
    };
};

/**
 * Sets the user object in the state after logging in.
 * @param {object} state The current state.
 * @param {object} payload The payload.
 */
const userLoginSuccess = (state, payload) => {
    let userObj = JSON.parse(payload.response).user;
    let user = Object.assign({}, state.user);
    user.Email = userObj.email;
    user.Name = userObj.name;
    user.Signature = userObj.signature

    return {
        ...state,
        didErrorLoggingIn: false,
        isLoggedIn: true,
        user: user
    };
};