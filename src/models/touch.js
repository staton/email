export default class Touch {

    get DidMove() {
        return this._didMove;
    }
    set DidMove(didMove) {
        this._didMove = didMove;
    }

    get Id() {
        return this._id;
    }

    get Time() {
        return this._time;
    }
    set Time(time) {
        this._time = time;
    }

    get X() {
        return this._x;
    }

    get Y() {
        return this._y;
    }

    constructor(id, time, x, y) {
        this._didMove = false;
        this._id = id;
        this._time = time;
        this._x = x;
        this._y = y;
    }
    
}