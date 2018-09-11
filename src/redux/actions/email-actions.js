import { ADD_EMAIL } from '../types';

export const addEmails = (emails) => {
    return {
        type: ADD_EMAIL,
        payload: {
            emails: emails
        }
    };
};

