import * as actions from '../email-actions';
import Email from '../../../models/email';
import EmailFlags from '../../../models/emailFlags';
import LoadingOverlayState from '../../../enums/LoadingOverlay';
import {
    EMAIL_ADD, 
    EMAIL_LIST_ITEM_SWIPED,
    EMAIL_DRAFT_ITEMS_ACTIVE,
    EMAIL_INBOX_ITEMS_ACTIVE,
    EMAIL_SENT_ITEMS_ACTIVE,
    EMAIL_SPAM_ITEMS_ACTIVE,
    EMAIL_TRASH_ITEMS_ACTIVE,
    EMAIL_LOAD_ERROR,
    EMAIL_LOAD_SUCCESS,
    EMAIL_LOADING_OVERLAY_STATE,
    EMAIL_SELECT
} from '../../types';

describe('email-actions action creators', () => {

    const testEmails = [
        new Email(1, 'from', 'from@abc.com', ['to@xyz.com'], [], [],
            'subject', 'preview', new Date('2018/05/29'), null, new EmailFlags(false, false, false, true)),
        new Email(2, 'from2', 'from2@abc.com', ['to@xyz.com'], [], [],
            'subject2', 'preview2', new Date('2018/05/30'), null, new EmailFlags(false, false, false, true))
    ];

    it('creates an action to add emails', () => {
        const emails = Object.assign({}, ...testEmails);
        const expectedAction = {
            type: EMAIL_ADD,
            payload: {
                emails: emails
            }
        };

        expect(actions.addEmails(emails)).toEqual(expectedAction);
    });

    it('creates an action when loading emails errors', () => {
        const errorObj = { message: '404' };
        const expectedAction = {
            type: EMAIL_LOAD_ERROR,
            payload: {
                err: errorObj
            }
        };

        expect(actions.loadEmailsError(errorObj)).toEqual(expectedAction);
    });

    it('creates an action when loading emails is successful', () => {
        const json = '{ "emails": [ { "id": 0 }, { "id": 1 } ] }';
        const expectedAction = {
            type: EMAIL_LOAD_SUCCESS,
            payload: {
                response: json
            }
        };

        expect(actions.loadEmailsSuccess(json)).toEqual(expectedAction);
    });

    it('creates an action to select email(s)', () => {
        const emailsToSelect = [Object.assign({}, ...testEmails)[0]];
        const isSelected= true;
        const expectedAction = {
            type: EMAIL_SELECT,
            payload: {
                isSelected: isSelected,
                emails: emailsToSelect
            }
        };

        expect(actions.selectEmail(emailsToSelect, isSelected)).toEqual(expectedAction);
    });

    it('creates an action to set the draft list active', () => {
        const isActive = true;
        const expectedAction = {
            type: EMAIL_DRAFT_ITEMS_ACTIVE,
            payload: {
                isActive: isActive
            }
        };

        expect(actions.setDraftListItemsActive(isActive)).toEqual(expectedAction);
    });

    it('creates an action to set the inbox list active', () => {
        const isActive = true;
        const expectedAction = {
            type: EMAIL_INBOX_ITEMS_ACTIVE,
            payload: {
                isActive: isActive
            }
        };

        expect(actions.setInboxListItemsActive(isActive)).toEqual(expectedAction);
    });

    it('creates an action to set the sent list active', () => {
        const isActive = true;
        const expectedAction = {
            type: EMAIL_SENT_ITEMS_ACTIVE,
            payload: {
                isActive: isActive
            }
        };

        expect(actions.setSentListItemsActive(isActive)).toEqual(expectedAction);
    });

    it('creates an action to set the spam list active', () => {
        const isActive = true;
        const expectedAction = {
            type: EMAIL_SPAM_ITEMS_ACTIVE,
            payload: {
                isActive: isActive
            }
        };

        expect(actions.setSpamListItemsActive(isActive)).toEqual(expectedAction);
    });

    it('creates an action to set the trash list active', () => {
        const isActive = true;
        const expectedAction = {
            type: EMAIL_TRASH_ITEMS_ACTIVE,
            payload: {
                isActive: isActive
            }
        };

        expect(actions.setTrashListItemsActive(isActive)).toEqual(expectedAction);
    });

    it('creates an action to set the "emails loading" indicator', () => {
        const overlayState = LoadingOverlayState.Fading;
        const expectedAction = {
            type: EMAIL_LOADING_OVERLAY_STATE,
            payload: {
                loadingOverlayState: overlayState
            }
        };

        expect(actions.setEmailLoadingOverlayState(overlayState)).toEqual(expectedAction);
    });

    it('creates an action to update the list of currently swiped emails', () => {
        const emails = [Object.assign({}, ...testEmails)[0]];
        const isSwipedOpen = true;
        const expectedAction = {
            type: EMAIL_LIST_ITEM_SWIPED,
            payload: {
                emails: emails,
                isSwipedOpen: isSwipedOpen
            }
        };

        expect(actions.updateCurrentSwipedEmails(emails, isSwipedOpen)).toEqual(expectedAction);
    });
});