class User {

    get Email() {
        return this._email;
    }
    set Email(email) {
        this._email = (email) ? email : '';
    }

    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = (name) ? name : '';
    }

    get Signature() {
        return this._signature;
    }
    set Signature(signature) {
        this._signature = (signature) ? signature : '';
    }

    constructor() {

    }
}

const USER = new User();

export default USER;