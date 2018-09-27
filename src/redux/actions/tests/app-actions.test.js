import * as actions from '../app-actions';
import {
    APP_SET_DRAWER_VISIBILITY,
    APP_SET_SCREEN_SIZE
} from '../../types';

describe('app-actions action creators', () => {

    it('should create an action to set the drawer visibility', () => {
        const isDrawerVisible = true;
        const expectedAction = {
            type: APP_SET_DRAWER_VISIBILITY,
            payload: {
                isDrawerVisible: isDrawerVisible
            }
        };

        expect(actions.setDrawerVisibility(isDrawerVisible)).toEqual(expectedAction);
    });

    it('should create an action to set the screen size', () => {
        const width = 1920;
        const height = 1080;
        const expectedAction = {
            type: APP_SET_SCREEN_SIZE,
            payload: {
                width: width,
                height: height
            }
        };
        
        expect(actions.setScreenSize(width, height)).toEqual(expectedAction);
    });

});