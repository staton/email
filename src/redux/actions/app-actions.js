import {
    APP_SET_DRAWER_VISIBILITY,
    APP_SET_SCREEN_SIZE
} from '../types';

export const setDrawerVisibility = (isDrawerVisible) => {
    return {
        type: APP_SET_DRAWER_VISIBILITY,
        payload: {
            isDrawerVisible: isDrawerVisible
        }
    };
};

export const setScreenSize = (width, height) => {
    return {
        type: APP_SET_SCREEN_SIZE,
        payload: {
            width: width,
            height: height
        }
    };
};