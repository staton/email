import { MAX_WIDTH_SMALL_SCREEN } from '../../resources/constants';
import {
    APP_SET_DRAWER_VISIBILITY,
    APP_SET_SCREEN_SIZE
} from '../types';

var isSmallScreen = (window.innerWidth <= MAX_WIDTH_SMALL_SCREEN);

export const INITIAL_STATE = {
    height: window.innerHeight,
    isDrawerVisible: !isSmallScreen,
    isSmallScreen: isSmallScreen,
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

        default:

            return state;
    }

};