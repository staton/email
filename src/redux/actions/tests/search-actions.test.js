import * as actions from '../search-actions';
import {
    SEARCH_SET_IS_SEARCHING,
    SEARCH_SET_SEARCH_BAR_FOCUS,
    SEARCH_SET_SEARCH_BAR_VISIBILITY,
    SEARCH_SET_SEARCH_TEXT
} from '../../types';

describe('search-actions action creators', () => {

    it('should create an action to set the isSearching state', () => {
        const isSearching = true;
        const expectedAction = {
            type: SEARCH_SET_IS_SEARCHING,
            payload: {
                isSearching: isSearching
            }
        };

        expect(actions.setIsSearching(isSearching)).toEqual(expectedAction);
    });

    it('should create an action to set the search bar focus state', () => {
        const isSearchBarFocused = true;
        const expectedAction = {
            type: SEARCH_SET_SEARCH_BAR_FOCUS,
            payload: {
                isSearchBarFocused: isSearchBarFocused
            }
        };

        expect(actions.setSearchBarFocus(isSearchBarFocused)).toEqual(expectedAction);
    });

    it('should create an action to set the search bar visibility', () => {
        const isSearchBarVisible = true;
        const expectedAction = {
            type: SEARCH_SET_SEARCH_BAR_VISIBILITY,
            payload: {
                isSearchBarVisible: isSearchBarVisible
            }
        };

        expect(actions.setSearchBarVisibility(isSearchBarVisible)).toEqual(expectedAction);
    });

    it('should create an action to set the search text', () => {
        const searchText = 'abc123';
        const expectedAction = {
            type: SEARCH_SET_SEARCH_TEXT,
            payload: {
                searchText: searchText
            }
        };

        expect(actions.setSearchText(searchText)).toEqual(expectedAction);
    });

});