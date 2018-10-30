import Email from "../models/email";
import EmailFlags from "../models/emailFlags";

var _ = require('lodash');

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
                ),
                json.toNames
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

    /**
     * Checks to see if a given email is in an array of emails.
     * @param {Email[]} emails The email array. 
     * @param {Email} email The email to find.
     * @returns {boolean} True if the email is in the array, false otherwise.
     */
    isEmailInArray(emails, email) {
        return (emails && email && emails.length > 0)
            ? (_.head(_.filter(emails, (o) => o.Id === email.Id)) !== undefined)
            : false;
    }

    /**
     * Removes an email from the given array.
     * @param {Email[]} emails The email array.
     * @param {Email} email The email to remove.
     * @returns {Email[]} The original emails array, without the given email.
     */
    removeEmailFromArray(emails, email) {
        return _.reject(emails, (o) => o.Id === email.Id);
    }

    /**
     * Returns the emails that belong in the Inbox.
     * @param {Email[]} emails The list of emails to filter.
     * @returns {Email[]} The emails that belong in the inbox.
     */
    getInboxEmails(emails) {
        return _.filter(emails, (o) => !o.Flags.IsSpam && !o.deletionDateTime);
    }

    /**
     * Returns the emails that belong in the Sent folder.
     * @param {Email[]} emails The list of emails to filter.
     * @param {string} userEmail The user's email address.
     * @returns {Email[]} The emails that belong in the sent folder.
     */
    getSentEmails(emails, userEmail) {
        return _.filter(emails, (o) => 
            o.FromEmail.toLowerCase() !== userEmail.toLowerCase() 
            && !o.deletionDateTime);
    }

    /**
     * Returns the emails that belong in the Spam folder.
     * @param {Email[]} emails The list of emails to filter.
     * @returns {Email[]} The emails that belong in the spam folder.
     */
    getSpamEmails(emails) {
        return _.filter(emails, (o) => o.Flags.IsSpam && !o.deletionDateTime);
    }

    /**
     * Returns the emails that belong in the Trash folder.
     * @param {Email[]} emails The list of emails to filter.
     * @returns {Email[]} The emails that belong in the trash folder.
     */
    getDeletedEmails(emails) {
        return _.filter(emails, (o) => o.deletionDateTime);
    }

    /**
     * Gets the first letter of the name, to display in dynamic checkboxes.
     * @param {string} name The name of which the first letter will be used for dynamic checkboxes.
     */
    getDynamicCheckBoxLetter(name) {
        return (name.trim() === '') ? '?' : name.charAt(0).toUpperCase();
    }

}

const EMAIL_MANAGER = new EmailManager();

export default EMAIL_MANAGER;