import * as actions from '../../actions/app-actions';
import appReducer from '../app-reducers';
import { MAX_WIDTH_SMALL_SCREEN } from '../../../resources/constants';

describe('app-reducers', () => {

    const INITIAL_STATE = {
        height: window.innerHeight,
        isDrawerVisible: false,
        isSearchBarVisible: (window.innerWidth > MAX_WIDTH_SMALL_SCREEN),
        isSmallScreen: (window.innerWidth <= MAX_WIDTH_SMALL_SCREEN),
        searchText: '',
        width: window.innerWidth
    };

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

    it('sets the search bar to be hidden', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarVisible = false;
        const expectedState = {
            ...state,
            isSearchBarVisible: isSearchBarVisible
        };
        const action = actions.setSearchBarVisibility(isSearchBarVisible);

        expect(appReducer(state, action)).toEqual(expectedState);
    });

    it('sets the search bar to be visible', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarVisible = true;
        const expectedState = {
            ...state,
            isSearchBarVisible: isSearchBarVisible
        };
        const action = actions.setSearchBarVisibility(isSearchBarVisible);

        expect(appReducer(state, action)).toEqual(expectedState);
    });
    
    it('sets the search text', () => {
        const state = { ...INITIAL_STATE };
        const searchText = 'ABC1 23 455';
        const expectedState = {
            ...state,
            searchText: searchText
        };
        const action = actions.setSearchText(searchText);

        expect(appReducer(state, action)).toEqual(expectedState);
    });

});