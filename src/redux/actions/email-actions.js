import { 
    ADD_EMAIL,
    SET_SEARCH_TEXT
} from '../types';

export const addEmails = (emails) => {
    return {
        type: ADD_EMAIL,
        payload: {
            emails: emails
        }
    };
};

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: {
            searchText: searchText
        }
    }
};
