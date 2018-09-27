import * as actions from '../../actions/app-actions';
import appReducer, { INITIAL_STATE } from '../app-reducers';
import { MAX_WIDTH_SMALL_SCREEN } from '../../../resources/constants';

describe('app-reducers', () => {

    it('returns the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('sets the drawer visibility', () => {
        const state = { ...INITIAL_STATE };
        const isDrawerVisible = true;
        const expectedState = {
            ...state,
            isDrawerVisible: isDrawerVisible
        };
        const action = actions.setDrawerVisibility(isDrawerVisible);

        expect(appReducer(state, action)).toEqual(expectedState);
    });

    it('sets the screen size', () => {
        const state = { ...INITIAL_STATE };
        const width = 1920;
        const height = 1080;
        const expectedState = {
            ...state,
            height: height,
            width: width,
            isSmallScreen: (width <= MAX_WIDTH_SMALL_SCREEN)
        };
        const action = actions.setScreenSize(width, height);

        expect(appReducer(state, action)).toEqual(expectedState);
    });

});