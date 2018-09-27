import {
    SEARCH_SET_IS_SEARCHING,
    SEARCH_SET_SEARCH_BAR_FOCUS,
    SEARCH_SET_SEARCH_BAR_VISIBILITY,
    SEARCH_SET_SEARCH_TEXT
} from '../types';

export const search = (searchText) => {
    return (dispatch) => {
        dispatch(setIsSearching(true));

        setTimeout(() => {
            dispatch(setIsSearching(false));
        }, 2000);
        /*fetch('http://example.com?a=123')
            .then((response) => {
                if (!response.ok) { 
                    console.warn(response.statusText); 
                }
                dispatch(setIsSearching(false));
            })
            .then((response) => response.json())
            .then((items) => dispatch(searchSuccess(items)))    // success
            .catch(() => dispatch(setIsSearching(false)));      // error
            */
    };
    /*{
        type: SEARCH_BEGIN,
        payload: {
            searchText: searchText
        }
    };*/
};

export const setIsSearching = (isSearching) => {
    return {
        type: SEARCH_SET_IS_SEARCHING,
        payload: {
            isSearching: isSearching
        }
    };
};

export const setSearchBarFocus = (isSearchBarFocused) => {
    return {
        type: SEARCH_SET_SEARCH_BAR_FOCUS,
        payload: {
            isSearchBarFocused: isSearchBarFocused
        }
    };
};

export const setSearchBarVisibility = (isSearchBarVisible) => {
    return {
        type: SEARCH_SET_SEARCH_BAR_VISIBILITY,
        payload: {
            isSearchBarVisible: isSearchBarVisible
        }
    };
};

export const setSearchText = (searchText) => {
    return {
        type: SEARCH_SET_SEARCH_TEXT,
        payload: {
            searchText: searchText
        }
    }
};