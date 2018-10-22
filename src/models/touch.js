export default class Touch {

    get Time() {
        return this._time;
    }
    set Time(time) {
        this._time = time;
    }

    get X() {
        return this._x;
    }
    set X(x) {
        this._x = x;
    }

    get Y() {
        return this._y;
    }
    set Y(y) {
        this._y = y;
    }

    constructor(time, x, y) {
        this._time = time;
        this._x = x;
        this._y = y;
    }
    
}