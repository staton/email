import { MAX_WIDTH_SMALL_SCREEN } from '../../resources/constants';
import {
    APP_SET_DRAWER_VISIBILITY,
    APP_SET_SCREEN_SIZE,
    APP_SET_SEARCH_BAR_VISIBILITY,
    APP_SET_SEARCH_TEXT
} from '../types';

const INITIAL_STATE = {
    height: window.innerHeight,
    isDrawerVisible: false,
    isSearchBarVisible: (window.innerWidth > MAX_WIDTH_SMALL_SCREEN),
    isSmallScreen: (window.innerWidth <= MAX_WIDTH_SMALL_SCREEN),
    searchText: '',
    width: window.innerWidth
};

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {

        case APP_SET_DRAWER_VISIBILITY:

            return {
                ...state,
                isDrawerVisible: action.payload.isDrawerVisible
            };

        case APP_SET_SCREEN_SIZE:
        
            return {
                ...state, 
                height: action.payload.height,
                isSmallScreen: (action.payload.width <= MAX_WIDTH_SMALL_SCREEN),
                width: action.payload.width
            };
            
        case APP_SET_SEARCH_BAR_VISIBILITY:

            return {
                ...state,
                isSearchBarVisible: action.payload.isSearchBarVisible
            };

        case APP_SET_SEARCH_TEXT:

            return {
                ...state, 
                searchText: action.payload.searchText
            };

        default:

            return state;
    }

};