class MockApiManager {

    loadEmails(success, failure) {

        let response = this.getMockEmailJson();

        setTimeout(() => {
            try {
                success(response);
            } catch (err) {
                failure();
            }
        }, 1500);
    }

    getMockEmailJson() {
        return `{ "emails": [
            {
                "id": 0,
                "fromName": "bob",
                "fromEmail": "bob@example.com",
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "hello from bob",
                "preview": "long time no see",
                "body": "",
                "emailSentDateTime": "2018-03-26T12:05:00Z",
                "deletionDateTime": "",
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
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "hey its joe",
                "preview": "havent seen you in a long time",
                "body": "",
                "emailSentDateTime": "2018-04-18T18:22:00Z",
                "deletionDateTime": "",
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
                "toEmails": ["s@gmail.com"],
                "ccEmails": [],
                "bccEmails": [],
                "subject": "hello from bob again",
                "preview": "here is a really long email preview to test to make sure that it gets cut off ok its not long enough yeah now it should be long enough",
                "body": "",
                "emailSentDateTime": "2018-08-29T11:58:00Z",
                "deletionDateTime": "",
                "flags": {
                    "didReply": false,
                    "isImportant": false,
                    "isSpam": false,
                    "isUnread": true
                }
            }
        ]}`;
    }

}

const API_MANAGER = new MockApiManager();

export default API_MANAGER;