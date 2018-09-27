import { MAX_WIDTH_SMALL_SCREEN } from '../../resources/constants';
import {
    SEARCH_SET_IS_SEARCHING,
    SEARCH_SET_SEARCH_BAR_FOCUS,
    SEARCH_SET_SEARCH_BAR_VISIBILITY,
    SEARCH_SET_SEARCH_TEXT
} from '../types';

export const INITIAL_STATE = {
    isSearchBarFocused: false,
    isSearchBarVisible: (window.innerWidth > MAX_WIDTH_SMALL_SCREEN),
    isSearching: false,
    searchText: ''
};

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {

        case SEARCH_SET_IS_SEARCHING:

            return {
                ...state,
                isSearching: action.payload.isSearching
            };

        case SEARCH_SET_SEARCH_BAR_FOCUS:

            return {
                ...state,
                isSearchBarFocused: action.payload.isSearchBarFocused
            };
            
        case SEARCH_SET_SEARCH_BAR_VISIBILITY:

            return {
                ...state,
                isSearchBarVisible: action.payload.isSearchBarVisible
            };

        case SEARCH_SET_SEARCH_TEXT:

            return {
                ...state, 
                searchText: action.payload.searchText
            };

        default:

            return state;
    }

};