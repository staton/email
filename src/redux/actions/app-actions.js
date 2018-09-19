import {
    APP_SET_SCREEN_SIZE,
    APP_SET_SEARCH_BAR_VISIBILITY,
    APP_SET_SEARCH_TEXT
} from '../types';

export const setScreenSize = (width, height) => {
    return {
        type: APP_SET_SCREEN_SIZE,
        payload: {
            width: width,
            height: height
        }
    };
};

export const setSearchBarVisibility = (isSearchBarVisible) => {
    return {
        type: APP_SET_SEARCH_BAR_VISIBILITY,
        payload: {
            isSearchBarVisible: isSearchBarVisible
        }
    };
};

export const setSearchText = (searchText) => {
    return {
        type: APP_SET_SEARCH_TEXT,
        payload: {
            searchText: searchText
        }
    }
};