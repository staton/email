import BackgroundColor from '../enums/backgroundColor';

class Email {
    
    get BccEmails() {
        return this._bccEmails;
    }

    get Body() {
        return this._body;
    }

    get CcEmails() {
        return this._ccEmails;
    }

    get DeletionDateTime() {
        return this._deletionDateTime;
    }

    get EmailSentDateTime() {
        return this._emailSentDateTime;
    }

    get Flags() {
        return this._flags;
    }

    get FromEmail() {
        return this._fromEmail;
    }

    get FromName() {
        return this._fromName;
    }

    get Id() {
        return this._id;
    }

    get Preview () {
        return this._preview;
    }

    get Subject() {
        return this._subject;
    }

    get ToEmails() {
        return this._toEmails;
    }

    get FirstLetter() {
        return this._firstLetter;
    }

    get Color() {
        return this._color;
    }

    constructor(id, fromName, fromEmail, toEmails, ccEmails, bccEmails,
        subject, preview, emailSentDateTime, deletionDateTime, flags) {

        this._id = id;
        this._fromName = fromName;
        this._fromEmail = fromEmail;
        this._toEmails = toEmails;
        this._ccEmails = ccEmails,
        this._bccEmails = bccEmails;
        this._subject = subject;
        this._preview = preview;
        this._body = ''; // body will be loaded only when user clicks on email
        this._emailSentDateTime = emailSentDateTime;
        this._deletionDateTime = deletionDateTime;
        this._flags = flags;
        this._firstLetter = (this._fromName.trim() === '')
            ? '?'
            : this._fromName.charAt(0).toUpperCase();
        this._color = BackgroundColor.getRandomEmailColor();

    }

}

export default Email;