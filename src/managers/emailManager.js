import Email from "../models/email";
import EmailFlags from "../models/emailFlags";

class EmailManager {
    
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
                json.emailSentDateTime,
                json.deletionDateTime,
                new EmailFlags(
                    json.didReply,
                    json.isImportant,
                    json.isSpam,
                    json.isUnread
                )
            );
        } catch (exception) {
            console.warn(exception.toString());
        }

        return email;
    }

}

const EMAIL_MANAGER = new EmailManager();

export default EMAIL_MANAGER;