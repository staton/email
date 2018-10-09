import EmailFlags from './emailFlags';

class Email {
    
    get BccEmails() {
        return this._bccEmails;
    }

    set BccEmails(bccEmails) {
        this._bccEmails = bccEmails;
    }

    get Body() {
        return this._body;
    }

    set Body(body) {
        this._body = body;
    }

    get CcEmails() {
        return this._ccEmails;
    }

    set CcEmails(ccEmails) {
        this._ccEmails = ccEmails;
    }

    get DeletionDateTime() {
        return this._deletionDateTime;
    }

    set DeletionDateTime(deletionDateTime) {
        this._deletionDateTime = deletionDateTime;
    }

    get EmailSentDateTime() {
        return this._emailSentDateTime;
    }

    set EmailSentDateTime(emailSentDateTime) {
        this._emailSentDateTime = emailSentDateTime;
    }

    get Flags() {
        return this._flags;
    }

    get FromEmail() {
        return this._fromEmail;
    }

    set FromEmail(fromEmail) {
        this._fromEmail = fromEmail;
    }

    get FromName() {
        return this._fromName;
    }

    set FromName(fromName) {
        this._fromName = fromName;
    }

    get Subject() {
        return this._subject;
    }

    set Subject(subject) {
        this._subject = subject;
    }

    get ToEmails() {
        return this._toEmails;
    }

    set ToEmails(toEmails) {
        this._toEmails = toEmails;
    }

    constructor() {
        this._flags = new EmailFlags();
    }

}

export default Email;