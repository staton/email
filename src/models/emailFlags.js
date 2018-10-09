class EmailFlags {

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

    constructor() {
        this._isImportant = false;
        this._isSpam = false;
        this._isUnread = true;
    }

}

export default EmailFlags;