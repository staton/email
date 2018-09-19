import * as actions from '../app-actions';
import * as types from '../../types';

describe('app-actions action creators', () => {

    it('should create an action to set the screen size', () => {
        const width = 1920;
        const height = 1080;
        const expectedAction = {
            type: types.APP_SET_SCREEN_SIZE,
            payload: {
                width: width,
                height: height
            }
        };
        
        expect(actions.setScreenSize(width, height)).toEqual(expectedAction);
    });

    it('should create an action to set the search bar visibility', () => {
        const isSearchBarVisible = true;
        const expectedAction = {
            type: types.APP_SET_SEARCH_BAR_VISIBILITY,
            payload: {
                isSearchBarVisible: isSearchBarVisible
            }
        };

        expect(actions.setSearchBarVisibility(isSearchBarVisible)).toEqual(expectedAction);
    });

    it('should create an action to set the search text', () => {
        const searchText = 'abc123';
        const expectedAction = {
            type: types.APP_SET_SEARCH_TEXT,
            payload: {
                searchText: searchText
            }
        };

        expect(actions.setSearchText(searchText)).toEqual(expectedAction);
    });

});