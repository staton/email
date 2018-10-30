const LOAD_EMAILS_DELAY = 2000;
const LOGIN_DELAY = 2000;

class MockApiManager {

    loadEmails(success, failure) {

        let response = this.getMockEmailJson();

        setTimeout(() => {
            try {
                success(response);
            } catch (err) {
                failure(err);
            }
        }, LOAD_EMAILS_DELAY);
    }

    login(email, password, success, failure) {
        let response = `{
            "response_code": 1,
            "user": {
                "email": "s@gmail.com",
                "name": "Staton",
                "signature": "<div>-S</div>"
            }
        }`;

        setTimeout(() => {
            try {
                success(response);
            } catch (err) {
                failure(err);
            }
        }, LOGIN_DELAY);
    }

    getMockEmailJson() {
        return `{ "emails": [
            {
                "id": 8733,
                "fromName": "Harry Lloyd",
                "fromEmail": "hlloyd@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "its harry",
                "preview": "remember me",
                "body": null,
                "emailSentDateTime": "2018-03-23T11:25:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 8778,
                "fromName": "",
                "fromEmail": "random@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "",
                "preview": "",
                "body": null,
                "emailSentDateTime": "2018-03-25T11:45:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 888,
                "fromName": "Tim",
                "fromEmail": "tim@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Just want to catch up",
                "preview": "Havent seen you in a while, just wondering how you are doing",
                "body": null,
                "emailSentDateTime": "2018-03-25T11:45:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 0,
                "fromName": "bob",
                "fromEmail": "bob@example.com",
                "toNames": [],
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
            },
            {
                "id": 2,
                "fromName": "joe",
                "fromEmail": "joe@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "hey its joe",
                "preview": "havent seen you in a long time",
                "body": null,
                "emailSentDateTime": "2018-04-18T18:22:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 3,
                "fromName": "bob",
                "fromEmail": "bob@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "hello from bob again",
                "preview": "here is a really long email preview to test to abc dfef gh s make sure that it gets cut off ok its not long enough yeah now it should be long enough",
                "body": null,
                "emailSentDateTime": "2018-08-29T11:58:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": true,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 4,
                "fromName": "Test",
                "fromEmail": "test@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "meeting tomorrow",
                "preview": "don't forget about our meeting tomorrow",
                "body": null,
                "emailSentDateTime": "2018-09-01T20:29:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 5,
                "fromName": "Walmart",
                "fromEmail": "walmart@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Hot deals",
                "preview": "Hot new deals on laptops",
                "body": null,
                "emailSentDateTime": "2018-09-02T18:29:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 6,
                "fromName": "Google",
                "fromEmail": "google@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Unexpected sign-in attempt",
                "preview": "An unexpected sign-in attempt occurred from IP 192.168.1.1 on device: Google Pixel 2 XL on 2018/09/03 12:35pm",
                "body": null,
                "emailSentDateTime": "2018-09-03T12:36:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": true,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 7,
                "fromName": "Yahoo News",
                "fromEmail": "yahoo@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Latest Breaking News",
                "preview": "Here is a random breaking news headline that isn't very important",
                "body": null,
                "emailSentDateTime": "2018-09-03T14:30:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 8,
                "fromName": "Joey",
                "fromEmail": "joey@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "You've won $100,000,000!",
                "preview": "Send your bank account information to claim your prize!",
                "body": null,
                "emailSentDateTime": "2018-09-04T12:08:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": true,
                    "isUnread": true
                }
            },
            {
                "id": 9,
                "fromName": "Edward",
                "fromEmail": "eddy@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "See you tomorrow",
                "preview": "looking forward to seeing you tomorrow",
                "body": null,
                "emailSentDateTime": "2018-09-04T13:08:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 10,
                "fromName": "Harry Lloyd",
                "fromEmail": "hlloyd@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "",
                "preview": "check this out",
                "body": null,
                "emailSentDateTime": "2018-09-05T12:15:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 11,
                "fromName": "Harry Lloyd",
                "fromEmail": "hlloyd@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "look",
                "preview": "again",
                "body": null,
                "emailSentDateTime": "2018-09-05T12:16:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": false
                }
            },
            {
                "id": 12,
                "fromName": "Xbox One",
                "fromEmail": "xbox@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "New Releases",
                "preview": "Check out the hottest new game releases for Xbox One on the Microsoft Store now",
                "body": null,
                "emailSentDateTime": "2018-09-08T09:55:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 13,
                "fromName": "Walmart",
                "fromEmail": "walmart@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Order Confirmation",
                "preview": "Your order #405820343203 has been confirmed, shipping information will arive shortly.",
                "body": null,
                "emailSentDateTime": "2018-09-08T15:25:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            },
            {
                "id": 14,
                "fromName": "Walmart",
                "fromEmail": "walmart@example.com",
                "toNames": [],
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "Walmart Order Tracking Number",
                "preview": "The tracking number for order #405820343203 is USPS86135795415699",
                "body": null,
                "emailSentDateTime": "2018-09-08T15:25:00Z",
                "deletionDateTime": null,
                "flags": {
                    "didReply": false,
                    "isImportant": true,
                    "isSpam": false,
                    "isUnread": true
                }
            }
        ]}`;
    }

}

const API_MANAGER = new MockApiManager();

export default API_MANAGER;