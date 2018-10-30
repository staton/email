import * as actions from '../../actions/user-actions';
import userReducer, { INITIAL_STATE } from '../user-reducers';

describe('user-reducers', () => {

    it('returns the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('sets the isLoggingIn state value', () => {
        const state = { ...INITIAL_STATE };
        const isLoggingIn = true;
        const expectedState = {
            ...state,
            isLoggingIn: isLoggingIn
        };
        const action = actions.setIsLoggingIn(isLoggingIn);

        expect(userReducer(state, action)).toEqual(expectedState);
    });

    it('sets the didErrorLoggingIn value when error occurs during login', () => {
        const state = { ...INITIAL_STATE };
        const err = 'error';
        const didErrorLoggingIn = true;
        const expectedState = {
            ...state,
            didErrorLoggingIn: didErrorLoggingIn
        };
        const action = actions.userLoginFailure(err);

        expect(userReducer(state, action)).toEqual(expectedState);
    });

    it('successfully sets the user after login', () => {
        const state = { ...INITIAL_STATE };
        const response = '{"code":1,"user":{"email":"s@b.com","name":"sme","signature":"<p>x</p>"}}';
        const user = Object.assign({}, state.user);
        user.Email = 's@b.com';
        user.Name = 'sme';
        user.Signature = '<p>x</p>';
        const expectedState = {
            ...state,
            didErrorLoggingIn: false,
            isLoggedIn: true,
            user: user
        };
        const action = actions.userLoginSuccess(response);

        expect(userReducer(state, action)).toEqual(expectedState);
    });

});