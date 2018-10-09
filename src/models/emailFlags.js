class EmailFlags {

    get didReply() {
        return this._didReply;
    }

    get IsImportant() {
        return this._isImportant;
    }

    get IsSpam() {
        return this._isSpam;
    }

    get IsUnread() {
        return this._isUnread;
    }

    constructor(didReply, isImportant, isSpam, isUnread) {
        this._didReply = didReply;
        this._isImportant = isImportant;
        this._isSpam = isSpam;
        this._isUnread = isUnread;
    }

}

export default EmailFlags;