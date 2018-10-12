import Email from "../models/email";
import EmailFlags from "../models/emailFlags";

const _ = require('lodash');

class EmailManager {
    
    /**
     * Converts an email represented by a JSON string to an Email object.
     * @param {string} json The JSON string representing an Email object.
     * @returns {Email} The Email object.
     */
    createEmailFromJson(json) {
        let email = null;

        try {
            email = new Email(
                json.id,
                json.fromName,
                json.fromEmail,
                json.toEmails,
                json.ccEmails,
                json.bccEmails,
                json.subject,
                json.preview,
                new Date(json.emailSentDateTime),
                json.deletionDateTime ? new Date(json.deletionDateTime) : null,
                new EmailFlags(
                    json.flags.didReply,
                    json.flags.isImportant,
                    json.flags.isSpam,
                    json.flags.isUnread
                )
            );
        } catch (exception) {
            console.warn(exception.toString());
        }

        return email;
    }

    /**
     * Sorts an array of emails by date.
     * @param {Email[]} emails The emails to sort.
     * @param {boolean} isAscending Indicates if the results should sort by asc.
     * @returns {Email[]} The sorted Email array.
     */
    sortEmailsByDate(emails, isAscending) {
        return (isAscending)
            ? _.sortBy(emails, [(o) => o.EmailSentDateTime ])
            : _.sortBy(emails, [(o) => o.EmailSentDateTime ]).reverse();
    }

}

const EMAIL_MANAGER = new EmailManager();

export default EMAIL_MANAGER;