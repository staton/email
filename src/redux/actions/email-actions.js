import { 
    EMAIL_ADD,
} from '../types';

export const addEmails = (emails) => {
    return {
        type: EMAIL_ADD,
        payload: {
            emails: emails
        }
    };
};
