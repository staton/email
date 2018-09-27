import * as actions from '../../actions/search-actions';
import searchReducer, { INITIAL_STATE } from '../search-reducers';

describe('search-reducers', () => {

    it('returns the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('sets the isSearching state to true', () => {
        const state = { ...INITIAL_STATE };
        const isSearching = true;
        const expectedState = {
            ...state,
            isSearching: isSearching
        };
        const action = actions.setIsSearching(isSearching);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

    it('sets the isSearching state to false', () => {
        const state = { ...INITIAL_STATE };
        const isSearching = false;
        const expectedState = {
            ...state,
            isSearching: isSearching
        };
        const action = actions.setIsSearching(isSearching);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

    it('sets the search bar to be focused', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarFocused = true;
        const expectedState = {
            ...state,
            isSearchBarFocused: isSearchBarFocused
        };
        const action = actions.setSearchBarFocus(isSearchBarFocused);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

    it('sets the search bar to be unfocused', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarFocused = false;
        const expectedState = {
            ...state,
            isSearchBarFocused: isSearchBarFocused
        };
        const action = actions.setSearchBarFocus(isSearchBarFocused);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

    it('sets the search bar to be hidden', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarVisible = false;
        const expectedState = {
            ...state,
            isSearchBarVisible: isSearchBarVisible
        };
        const action = actions.setSearchBarVisibility(isSearchBarVisible);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

    it('sets the search bar to be visible', () => {
        const state = { ...INITIAL_STATE };
        const isSearchBarVisible = true;
        const expectedState = {
            ...state,
            isSearchBarVisible: isSearchBarVisible
        };
        const action = actions.setSearchBarVisibility(isSearchBarVisible);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });
    
    it('sets the search text', () => {
        const state = { ...INITIAL_STATE };
        const searchText = 'ABC1 23 455';
        const expectedState = {
            ...state,
            searchText: searchText
        };
        const action = actions.setSearchText(searchText);

        expect(searchReducer(state, action)).toEqual(expectedState);
    });

});