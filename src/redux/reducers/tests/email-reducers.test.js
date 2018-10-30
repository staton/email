import * as actions from '../../actions/email-actions';
import emailReducer, { INITIAL_STATE } from '../email-reducers';
import Email from '../../../models/email';
import BackgroundColor from '../../../enums/backgroundColor';
import LoadingOverlayState from '../../../enums/LoadingOverlay';
import EmailFlags from '../../../models/emailFlags';

describe('email-reducers', () => {

    it('returns the initial state', () => {
        expect(emailReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('adds emails to the list of emails', () => {
        const state = { ...INITIAL_STATE };
        const emails = state.emails.slice();
        emails.push(...[
            new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false))
        ]);
        const expectedState = {
            ...state,
            emails: emails
        };
        const action = actions.addEmails(emails);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('sets the didErrorLoadingEmails state value when failed to load emails', () => {
        const state = { ...INITIAL_STATE };
        const err = 'error';
        const expectedState = {
            ...state,
            didErrorLoadingEmails: true
        };
        const action = actions.loadEmailsError(err);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('successfully loads emails from json', () => {
        BackgroundColor.getRandomEmailColor = jest.fn(() => 'rgb(255, 255, 255)');
        const state = { ...INITIAL_STATE };
        const json = 
            `{ "emails": [
                {
                    "id": 0,
                    "fromName": "bob",
                    "fromEmail": "bob@example.com",
                    "toEmails": ["s@gmail.com"],
                    "ccEmails": [],
                    "bccEmails": [],
                    "subject": "hello from bob",
                    "preview": "long time no see",
                    "body": null,
                    "emailSentDateTime": "2018-03-26T12:05:00Z",
                    "deletionDateTime": null,
                    "flags": {
                        "didReply": false,
                        "isImportant": false,
                        "isSpam": false,
                        "isUnread": false
                    }
                }
            ]}`;
        const expectedState = {
            ...state,
            emails: [ 
                new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                    new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false))
            ],
            didErrorLoadingEmails: false,
            didLoadEmails: true
        };
        const action = actions.loadEmailsSuccess(json);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('updates the list of currently swiped emails', () => {
        const state = { ...INITIAL_STATE };
        const emails = state.currentSwipedEmails.slice();
        const isSwipedOpen = true;
        emails.push(new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
            new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false))
        );
        const expectedState = {
            ...state,
            currentSwipedEmails: emails
        };
        const action = actions.updateCurrentSwipedEmails(emails, isSwipedOpen);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('correctly sets the email loading overlay state', () => {
        const state = { ...INITIAL_STATE };
        const loadingOverlayState = LoadingOverlayState.Fading;
        const expectedState = {
            ...state,
            loadingOverlayState: loadingOverlayState
        };
        const action = actions.setEmailLoadingOverlayState(loadingOverlayState);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('selects an email', () => {
        const state = { ...INITIAL_STATE };
        const emails = [
            new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false)) 
        ];
        const isSelected = true;
        const expectedState = {
            ...state,
            selectedEmails: emails
        };
        const action = actions.selectEmail(emails, isSelected);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('unselects an email', () => {
        const state = { 
            ...INITIAL_STATE ,
            selectedEmails: [
                new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                    new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false))
            ]
        };
        const emails = [
            new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false)) 
        ];
        const isSelected = false;
        const expectedState = {
            ...state,
            selectedEmails: []
        };
        const action = actions.selectEmail(emails, isSelected);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });

    it('clears the list of selected emails when passed an empty array', () => {
        const state = { 
            ...INITIAL_STATE ,
            selectedEmails: [
                new Email(0, 'bob', 'bob@example.com', ['s@gmail.com'], [], [], 'hello from bob', 'long time no see', 
                    new Date('2018-03-26T12:05:00Z'), null, new EmailFlags(false, false, false, false))
            ]
        };
        const emails = [];
        const isSelected = false;
        const expectedState = {
            ...state,
            selectedEmails: []
        };
        const action = actions.selectEmail(emails, isSelected);

        expect(emailReducer(state, action)).toEqual(expectedState);
    });
});