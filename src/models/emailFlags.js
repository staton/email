class EmailFlags {

    get DidReply() {
        return this._didReply;
    }
    set DidReply(didReply) {
        this._didReply = didReply;
    }

    get IsImportant() {
        return this._isImportant;
    }
    set IsImportant(isImportant) {
        this._isImportant = isImportant;
    }

    get IsSpam() {
        return this._isSpam;
    }
    set IsSpam(isSpam) {
        this._isSpam = isSpam;
    }

    get IsUnread() {
        return this._isUnread;
    }
    set IsUnread(isUnread) {
        this._isUnread = isUnread;
    }

    constructor(didReply, isImportant, isSpam, isUnread) {
        this._didReply = didReply;
        this._isImportant = isImportant;
        this._isSpam = isSpam;
        this._isUnread = isUnread;
    }

}

export default EmailFlags;