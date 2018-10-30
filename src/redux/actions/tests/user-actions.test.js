import * as actions from '../user-actions';
import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_SET_LOGGING_IN
} from '../../types';

describe('user-actions action creators', () => {

    it('should create an action to set the setIsLoggingIn value', () => {
        const isLoggingIn= true;
        const expectedAction = {
            type: USER_SET_LOGGING_IN,
            payload: {
                isLoggingIn: isLoggingIn
            }
        };

        expect(actions.setIsLoggingIn(isLoggingIn)).toEqual(expectedAction);
    });

    it.skip('should create a thunk to handle the user login', () => {
        // TODO
    });

    it('should create an action to handle the user login success response', () => {
        const response = '{"code":1,"user":{"email":"s@b.com", "name":"sme", "signature":"<div>s</div>"}}'
        const expectedAction = {
            type: USER_LOGIN_SUCCESS,
            payload: {
                response: response
            }
        };
        
        expect(actions.userLoginSuccess(response)).toEqual(expectedAction);
    });

    it('should create an action to handle the user login error response', () => {
        const err = 'error'
        const expectedAction = {
            type: USER_LOGIN_FAILURE,
            payload: {
                err: err
            }
        };
        
        expect(actions.userLoginFailure(err)).toEqual(expectedAction);
    });

});